import React, { useEffect, useState } from 'react';
import 'css/all.css';
import Layout from '../layout/Layout';
import { ApolloProvider, useMutation, useQuery } from '@apollo/client';
import { getContext_GetProfile_data as IProfile, categoryList_CategoryList_data, pageInfoCreate, pageInfoCreateVariables, pageInfoUpdate, pageInfoUpdateVariables, getContext, UserRole } from 'types/api';
import PinkClient from "apollo/client"
import { ISet } from 'types/interface';
import "dayjs/locale/ko"
import dayjs from 'dayjs';
import { ADMINS, FULL_ACCESS } from '../types/const';
import Toast from '../components/toast/Toast';
import { GET_CONTEXT } from '../apollo/gql/queries';
import { PAGE_INFO_CREATE, PAGE_INFO_UPDATE } from '../apollo/gql/mutations';
import { bracketVergionChange } from '../utils/Storage';
import { AppProps } from 'next/dist/next-server/lib/router/router';
import Page404 from './404';
dayjs.locale('ko')

export type TContext = {
  editMode: boolean;
  setEditMode: ISet<boolean>;
  submitEdit?: (pageKey: string, data: any) => void;
  categories: categoryList_CategoryList_data[]
  role: UserRole
  isAdmin: boolean,
  isSeller: boolean,
  isManager: boolean,
  myProfile?: IProfile
  isLogin?: boolean;
  isParterB?: boolean;
  isParterNonB?: boolean;
}

const defaultContext: TContext = {
  editMode: false,
  setEditMode: () => { },
  categories: [],
  role: UserRole.anonymous,
  isAdmin: false,
  isManager: false,
  isSeller: false,
  submitEdit: undefined,
  myProfile: undefined,
  isLogin: false,
  isParterB: false,
  isParterNonB: false
}

export const AppContext = React.createContext<TContext>(defaultContext);

function App({ Component, pageProps }: any) {
  const ComponentLayout = Component.Layout ? Component.Layout : Layout;
  console.log(Component.Auth);
  const ComponentAuth = Component.Auth ? Component.Auth : FULL_ACCESS;
  const [pageInfoCreateMu, { loading: pageInfoCreateLoading }] = useMutation<pageInfoCreate, pageInfoCreateVariables>(PAGE_INFO_CREATE, {
    client: PinkClient
  })

  const [pageInfoUpdateMu, { loading: pageInfoUpdateLoading }] = useMutation<pageInfoUpdate, pageInfoUpdateVariables>(PAGE_INFO_UPDATE, {
    client: PinkClient
  })
  const { data } = useQuery<getContext>(GET_CONTEXT, {
    client: PinkClient,
    nextFetchPolicy: "cache-and-network"
  })

  const catList = data?.CategoryList?.data || []
  const myProfile = data?.GetProfile?.data || undefined
  const role: UserRole = myProfile?.role || UserRole.anonymous

  const submitEdit = (key: string, value: any) => {
    const params = {
      key,
      value
    };
    pageInfoCreateMu({
      variables: {
        params
      }
    }).then((data) => {
      console.log(data)
      pageInfoUpdateMu({
        variables: {
          key,
          params: {
            key,
            value
          }
        }
      })
    })
  }

  const isSeller = [UserRole.partner, UserRole.partnerB, UserRole.manager, UserRole.admin].includes(role);
  const isParterB = [UserRole.partnerB, UserRole.manager, UserRole.admin].includes(role);
  const isParterNonB = [UserRole.partner, UserRole.manager, UserRole.admin].includes(role);
  const [editMode, setEditMode] = useState<boolean>(false);
  {/* <DaumPostcode autoResize autoClose onSearch={() => { }} onComplete={(asd) => { }} /> */ }

  useEffect(() => { bracketVergionChange() }, [])


  console.log("myProfile");
  console.log(myProfile);

  if (!ComponentAuth.includes(role || null)) {
    console.log("Page404");
    Component = Page404
  }

  return (
    <div className="App">
      <ApolloProvider client={PinkClient}>
        <AppContext.Provider value={{
          editMode,
          setEditMode,
          submitEdit,
          categories: catList || [],
          role,
          myProfile,
          isSeller,
          isParterB,
          isAdmin: role === UserRole.admin,
          isManager: ADMINS.includes(role),
          isLogin: !!myProfile,
          isParterNonB
        }}>
          <ComponentLayout>
            <Component {...pageProps} />
          </ComponentLayout>
        </AppContext.Provider>
      </ApolloProvider>
      <Toast />
    </div>
  );
}

export default App;