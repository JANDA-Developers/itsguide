/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: announceFindById
// ====================================================

export interface announceFindById_AnnounceFindById_error {
  __typename: "CustomError";
  location: string;
  severity: ERR_SEVERITY;
  code: ERR_CODE;
  message: string;
}

export interface announceFindById_AnnounceFindById_data_author_busiRegistration {
  __typename: "File";
  name: string;
  uri: string;
  owner: string;
}

export interface announceFindById_AnnounceFindById_data_author_profileImg {
  __typename: "File";
  uri: string;
}

export interface announceFindById_AnnounceFindById_data_author_guideLicense {
  __typename: "File";
  name: string;
  uri: string;
  owner: string;
}

export interface announceFindById_AnnounceFindById_data_author_guideLicenses {
  __typename: "File";
  name: string;
  uri: string;
  owner: string;
}

export interface announceFindById_AnnounceFindById_data_author_bankImg {
  __typename: "File";
  name: string;
  uri: string;
  owner: string;
}

export interface announceFindById_AnnounceFindById_data_author {
  __typename: "User";
  _id: string;
  /**
   * 닉네임 유니크
   */
  nickName: string;
  createdAt: any;
  updatedAt: any;
  isDelete: boolean;
  email: string;
  /**
   * 담당자명
   */
  manageName: string;
  connectionCount: number;
  role: UserRole;
  brith_date: string;
  address: string;
  address_detail: string;
  acceptSms: boolean;
  status: UserStatus;
  acceptEamil: boolean;
  /**
   * 매니저에 의한 회원가입 거절
   */
  isDenied: boolean | null;
  is_froreginer: boolean;
  /**
   * 기업 전화번호
   */
  busi_contact: string;
  /**
   * 담당자 연락처
   */
  manageContact: string;
  resignDate: any | null;
  gender: GENDER;
  busi_num: string;
  /**
   * 회원가입 거절 사유
   */
  denyReason: string | null;
  /**
   * 부서명
   */
  busi_department: string;
  isVerifiedManager: boolean;
  isVerifiedPhoneNumber: boolean;
  /**
   * 사업자 등록증
   */
  busiRegistration: announceFindById_AnnounceFindById_data_author_busiRegistration | null;
  /**
   * 개인 법인인지 아닌지 체크함 True = 법인
   */
  is_priv_corper: boolean;
  /**
   * 사업자명
   */
  busi_name: string;
  busi_address: string;
  account_number: string;
  name: string;
  bank_name: string;
  resignReason: string | null;
  resignReasonType: string | null;
  isResigned: boolean | null;
  phoneNumber: string;
  /**
   * 프로필 사진
   */
  profileImg: announceFindById_AnnounceFindById_data_author_profileImg | null;
  /**
   * 가이드 자격증
   */
  guideLicense: announceFindById_AnnounceFindById_data_author_guideLicense | null;
  /**
   * 가이드 자격증들
   */
  guideLicenses: announceFindById_AnnounceFindById_data_author_guideLicenses[] | null;
  /**
   * 주력언어
   */
  lang: Lang;
  /**
   * 통장사본
   */
  bankImg: announceFindById_AnnounceFindById_data_author_bankImg | null;
}

export interface announceFindById_AnnounceFindById_data_attachFiles {
  __typename: "File";
  name: string;
  uri: string;
  owner: string;
}

export interface announceFindById_AnnounceFindById_data_thumb {
  __typename: "File";
  name: string;
  uri: string;
  owner: string;
}

export interface announceFindById_AnnounceFindById_data {
  __typename: "Announce";
  _id: string;
  createdAt: any;
  updatedAt: any;
  isDelete: boolean;
  title: string;
  no: number;
  contents: string;
  author: announceFindById_AnnounceFindById_data_author | null;
  isNotice: boolean | null;
  isOpen: boolean | null;
  summary: string | null;
  subTitle: string | null;
  keyWards: string[] | null;
  attachFiles: announceFindById_AnnounceFindById_data_attachFiles[] | null;
  thumb: announceFindById_AnnounceFindById_data_thumb | null;
  viewCount: number;
  type: AnnounceType;
}

export interface announceFindById_AnnounceFindById {
  __typename: "AnnounceFindByIdResponse";
  ok: boolean;
  error: announceFindById_AnnounceFindById_error | null;
  data: announceFindById_AnnounceFindById_data | null;
}

export interface announceFindById {
  AnnounceFindById: announceFindById_AnnounceFindById;
}

export interface announceFindByIdVariables {
  _id: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: announceList
// ====================================================

export interface announceList_AnnounceList_error {
  __typename: "CustomError";
  location: string;
  severity: ERR_SEVERITY;
  code: ERR_CODE;
  message: string;
}

export interface announceList_AnnounceList_page {
  __typename: "Page";
  /**
   * 현재 페이지 번호
   */
  page: number;
  /**
   * 페이지당 문서 갯수
   */
  cntPerPage: number;
  /**
   * 페이지 총 갯수
   */
  totalPageSize: number;
  /**
   * 시작 페이지 번호
   */
  start_page_num: number;
  /**
   * 마지막 페이지 번호
   */
  end_page_num: number;
  /**
   * 이전(<<) 표시 여부
   */
  isPrev: boolean;
  /**
   * 다음(>>) 표시 여부
   */
  isNext: boolean;
  /**
   * 이전(<<) 클릭시 표시할 페이지 번호
   */
  prev_page_num: number;
  /**
   * 다음(>>) 클릭시 표시할 페이지 번호
   */
  next_page_num: number;
  /**
   * 총 갯수
   */
  totalCount: number;
  /**
   * 마지막 패이지의 갯수 (index계산 하는데 사용함)
   */
  remainder: number;
}

export interface announceList_AnnounceList_data_author_busiRegistration {
  __typename: "File";
  name: string;
  uri: string;
  owner: string;
}

export interface announceList_AnnounceList_data_author_profileImg {
  __typename: "File";
  uri: string;
}

export interface announceList_AnnounceList_data_author_guideLicense {
  __typename: "File";
  name: string;
  uri: string;
  owner: string;
}

export interface announceList_AnnounceList_data_author_guideLicenses {
  __typename: "File";
  name: string;
  uri: string;
  owner: string;
}

export interface announceList_AnnounceList_data_author_bankImg {
  __typename: "File";
  name: string;
  uri: string;
  owner: string;
}

export interface announceList_AnnounceList_data_author {
  __typename: "User";
  _id: string;
  /**
   * 닉네임 유니크
   */
  nickName: string;
  createdAt: any;
  updatedAt: any;
  isDelete: boolean;
  email: string;
  /**
   * 담당자명
   */
  manageName: string;
  connectionCount: number;
  role: UserRole;
  brith_date: string;
  address: string;
  address_detail: string;
  acceptSms: boolean;
  status: UserStatus;
  acceptEamil: boolean;
  /**
   * 매니저에 의한 회원가입 거절
   */
  isDenied: boolean | null;
  is_froreginer: boolean;
  /**
   * 기업 전화번호
   */
  busi_contact: string;
  /**
   * 담당자 연락처
   */
  manageContact: string;
  resignDate: any | null;
  gender: GENDER;
  busi_num: string;
  /**
   * 회원가입 거절 사유
   */
  denyReason: string | null;
  /**
   * 부서명
   */
  busi_department: string;
  isVerifiedManager: boolean;
  isVerifiedPhoneNumber: boolean;
  /**
   * 사업자 등록증
   */
  busiRegistration: announceList_AnnounceList_data_author_busiRegistration | null;
  /**
   * 개인 법인인지 아닌지 체크함 True = 법인
   */
  is_priv_corper: boolean;
  /**
   * 사업자명
   */
  busi_name: string;
  busi_address: string;
  account_number: string;
  name: string;
  bank_name: string;
  resignReason: string | null;
  resignReasonType: string | null;
  isResigned: boolean | null;
  phoneNumber: string;
  /**
   * 프로필 사진
   */
  profileImg: announceList_AnnounceList_data_author_profileImg | null;
  /**
   * 가이드 자격증
   */
  guideLicense: announceList_AnnounceList_data_author_guideLicense | null;
  /**
   * 가이드 자격증들
   */
  guideLicenses: announceList_AnnounceList_data_author_guideLicenses[] | null;
  /**
   * 주력언어
   */
  lang: Lang;
  /**
   * 통장사본
   */
  bankImg: announceList_AnnounceList_data_author_bankImg | null;
}

export interface announceList_AnnounceList_data_attachFiles {
  __typename: "File";
  name: string;
  uri: string;
  owner: string;
}

export interface announceList_AnnounceList_data_thumb {
  __typename: "File";
  name: string;
  uri: string;
  owner: string;
}

export interface announceList_AnnounceList_data {
  __typename: "Announce";
  _id: string;
  createdAt: any;
  updatedAt: any;
  isDelete: boolean;
  title: string;
  no: number;
  contents: string;
  author: announceList_AnnounceList_data_author | null;
  isNotice: boolean | null;
  isOpen: boolean | null;
  summary: string | null;
  subTitle: string | null;
  keyWards: string[] | null;
  attachFiles: announceList_AnnounceList_data_attachFiles[] | null;
  thumb: announceList_AnnounceList_data_thumb | null;
  viewCount: number;
  type: AnnounceType;
}

export interface announceList_AnnounceList {
  __typename: "AnnounceListResponse";
  ok: boolean;
  error: announceList_AnnounceList_error | null;
  page: announceList_AnnounceList_page;
  data: announceList_AnnounceList_data[];
}

export interface announceList {
  AnnounceList: announceList_AnnounceList;
}

export interface announceListVariables {
  sort?: _AnnounceSort[] | null;
  filter?: _AnnounceFilter | null;
  pageInput: pageInput;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: announceCreate
// ====================================================

export interface announceCreate_AnnounceCreate_error {
  __typename: "CustomError";
  location: string;
  severity: ERR_SEVERITY;
  code: ERR_CODE;
  message: string;
}

export interface announceCreate_AnnounceCreate_data {
  __typename: "Announce";
  _id: string;
}

export interface announceCreate_AnnounceCreate {
  __typename: "AnnounceCreateResponse";
  ok: boolean;
  error: announceCreate_AnnounceCreate_error | null;
  data: announceCreate_AnnounceCreate_data | null;
}

export interface announceCreate {
  AnnounceCreate: announceCreate_AnnounceCreate;
}

export interface announceCreateVariables {
  params: AnnounceCreateInput;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: announceDelete
// ====================================================

export interface announceDelete_AnnounceDelete_error {
  __typename: "CustomError";
  location: string;
  severity: ERR_SEVERITY;
  code: ERR_CODE;
  message: string;
}

export interface announceDelete_AnnounceDelete {
  __typename: "AnnounceDeleteResponse";
  ok: boolean;
  error: announceDelete_AnnounceDelete_error | null;
}

export interface announceDelete {
  AnnounceDelete: announceDelete_AnnounceDelete;
}

export interface announceDeleteVariables {
  id: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: announceUpdate
// ====================================================

export interface announceUpdate_AnnounceUpdate_error {
  __typename: "CustomError";
  location: string;
  severity: ERR_SEVERITY;
  code: ERR_CODE;
  message: string;
}

export interface announceUpdate_AnnounceUpdate_data {
  __typename: "Announce";
  _id: string;
}

export interface announceUpdate_AnnounceUpdate {
  __typename: "AnnounceUpdateResponse";
  ok: boolean;
  error: announceUpdate_AnnounceUpdate_error | null;
  data: announceUpdate_AnnounceUpdate_data | null;
}

export interface announceUpdate {
  AnnounceUpdate: announceUpdate_AnnounceUpdate;
}

export interface announceUpdateVariables {
  params: AnnounceUpdateInput;
  id: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: answerCreate
// ====================================================

export interface answerCreate_AnswerCreate_error {
  __typename: "CustomError";
  location: string;
  severity: ERR_SEVERITY;
  code: ERR_CODE;
  message: string;
}

export interface answerCreate_AnswerCreate_data_author_profileImg {
  __typename: "File";
  uri: string;
}

export interface answerCreate_AnswerCreate_data_author {
  __typename: "User";
  _id: string;
  name: string;
  /**
   * 프로필 사진
   */
  profileImg: answerCreate_AnswerCreate_data_author_profileImg | null;
}

export interface answerCreate_AnswerCreate_data {
  __typename: "Answer";
  _id: string;
  createdAt: any;
  updatedAt: any;
  isDelete: boolean;
  content: string;
  author: answerCreate_AnswerCreate_data_author;
}

export interface answerCreate_AnswerCreate {
  __typename: "AnswerCreateResponse";
  ok: boolean;
  error: answerCreate_AnswerCreate_error | null;
  data: answerCreate_AnswerCreate_data | null;
}

export interface answerCreate {
  AnswerCreate: answerCreate_AnswerCreate;
}

export interface answerCreateVariables {
  params: AnswerCreateInput;
  targetId: string;
  target: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: answerDelete
// ====================================================

export interface answerDelete_AnswerDelete_error {
  __typename: "CustomError";
  location: string;
  severity: ERR_SEVERITY;
  code: ERR_CODE;
  message: string;
}

export interface answerDelete_AnswerDelete {
  __typename: "AnswerDeleteResponse";
  ok: boolean;
  error: answerDelete_AnswerDelete_error | null;
}

export interface answerDelete {
  AnswerDelete: answerDelete_AnswerDelete;
}

export interface answerDeleteVariables {
  id: string;
  targetId: string;
  target: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: answerUpdate
// ====================================================

export interface answerUpdate_AnswerUpdate_error {
  __typename: "CustomError";
  location: string;
  severity: ERR_SEVERITY;
  code: ERR_CODE;
  message: string;
}

export interface answerUpdate_AnswerUpdate_data {
  __typename: "Answer";
  _id: string;
}

export interface answerUpdate_AnswerUpdate {
  __typename: "AnswerUpdateResponse";
  ok: boolean;
  error: answerUpdate_AnswerUpdate_error | null;
  data: answerUpdate_AnswerUpdate_data | null;
}

export interface answerUpdate {
  AnswerUpdate: answerUpdate_AnswerUpdate;
}

export interface answerUpdateVariables {
  params: AnswerUpdateInput;
  targetId: string;
  target: string;
  _id: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: BoardList
// ====================================================

export interface BoardList_BoardList_error {
  __typename: "CustomError";
  location: string;
  severity: ERR_SEVERITY;
  code: ERR_CODE;
  message: string;
}

export interface BoardList_BoardList_data_thumb {
  __typename: "File";
  uri: string;
}

export interface BoardList_BoardList_data {
  __typename: "IntegratedBoards";
  _id: string;
  createdAt: any;
  updatedAt: any;
  isDelete: boolean;
  title: string;
  contents: string;
  isNotice: boolean | null;
  isOpen: boolean | null;
  summary: string | null;
  subTitle: string | null;
  keyWards: string[] | null;
  thumb: BoardList_BoardList_data_thumb | null;
  viewCount: number;
  likeCount: number;
  slug: string;
}

export interface BoardList_BoardList {
  __typename: "IntegratedBoardsResponse";
  ok: boolean;
  error: BoardList_BoardList_error | null;
  data: BoardList_BoardList_data[] | null;
}

export interface BoardList {
  BoardList: BoardList_BoardList;
}

export interface BoardListVariables {
  filter?: _BoardFilter | null;
  sort?: _BoardSort[] | null;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: myBoardList
// ====================================================

export interface myBoardList_MyBoardList_error {
  __typename: "CustomError";
  location: string;
  severity: ERR_SEVERITY;
  code: ERR_CODE;
  message: string;
}

export interface myBoardList_MyBoardList_data_thumb {
  __typename: "File";
  uri: string;
}

export interface myBoardList_MyBoardList_data {
  __typename: "IntegratedBoard";
  _id: string;
  createdAt: any;
  updatedAt: any;
  isDelete: boolean;
  title: string;
  contents: string;
  isNotice: boolean | null;
  isOpen: boolean | null;
  summary: string | null;
  subTitle: string | null;
  keyWards: string[] | null;
  thumb: myBoardList_MyBoardList_data_thumb | null;
  viewCount: number;
  likeCount: number;
  slug: string;
  questionStatus: string | null;
  boardType: BoardType;
}

export interface myBoardList_MyBoardList {
  __typename: "IntegratedBoardResponse";
  ok: boolean;
  error: myBoardList_MyBoardList_error | null;
  data: myBoardList_MyBoardList_data[] | null;
}

export interface myBoardList {
  MyBoardList: myBoardList_MyBoardList;
}

export interface myBoardListVariables {
  filter?: _BoardFilter | null;
  sort?: _BoardSort[] | null;
  email?: string | null;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: boardControlMaster
// ====================================================

export interface boardControlMaster_BoardControlMaster_error {
  __typename: "CustomError";
  location: string;
  severity: ERR_SEVERITY;
  code: ERR_CODE;
  message: string;
}

export interface boardControlMaster_BoardControlMaster {
  __typename: "Response";
  ok: boolean;
  error: boardControlMaster_BoardControlMaster_error | null;
}

export interface boardControlMaster {
  BoardControlMaster: boardControlMaster_BoardControlMaster;
}

export interface boardControlMasterVariables {
  action: BoardAction;
  targets: BoardTarget[];
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: bookingList
// ====================================================

export interface bookingList_BookingList_error {
  __typename: "CustomError";
  location: string;
  severity: ERR_SEVERITY;
  code: ERR_CODE;
  message: string;
}

export interface bookingList_BookingList_page {
  __typename: "Page";
  /**
   * 현재 페이지 번호
   */
  page: number;
  /**
   * 페이지당 문서 갯수
   */
  cntPerPage: number;
  /**
   * 페이지 총 갯수
   */
  totalPageSize: number;
  /**
   * 시작 페이지 번호
   */
  start_page_num: number;
  /**
   * 마지막 페이지 번호
   */
  end_page_num: number;
  /**
   * 이전(<<) 표시 여부
   */
  isPrev: boolean;
  /**
   * 다음(>>) 표시 여부
   */
  isNext: boolean;
  /**
   * 이전(<<) 클릭시 표시할 페이지 번호
   */
  prev_page_num: number;
  /**
   * 다음(>>) 클릭시 표시할 페이지 번호
   */
  next_page_num: number;
  /**
   * 총 갯수
   */
  totalCount: number;
  /**
   * 마지막 패이지의 갯수 (index계산 하는데 사용함)
   */
  remainder: number;
}

export interface bookingList_BookingList_data_payment_history {
  __typename: "TxHistory";
  status: string;
  price: number;
  metadata: any | null;
  createdAt: any;
  updatedAt: any;
}

export interface bookingList_BookingList_data_payment {
  __typename: "Payment";
  _id: string;
  createdAt: any;
  updatedAt: any;
  isDelete: boolean;
  payMethod: PayMethod;
  status: PaymentStatus;
  price: number;
  totalCancelPrice: number;
  cancelDate: any | null;
  isPartialCancel: number;
  groupCode: string | null;
  history: bookingList_BookingList_data_payment_history[];
}

export interface bookingList_BookingList_data_product_category {
  __typename: "Category";
  _id: string;
  label: string;
}

export interface bookingList_BookingList_data_product_images {
  __typename: "File";
  name: string;
  uri: string;
  owner: string;
}

export interface bookingList_BookingList_data_product_author {
  __typename: "User";
  name: string;
}

export interface bookingList_BookingList_data_product {
  __typename: "Product";
  _id: string;
  createdAt: any;
  updatedAt: any;
  isDelete: boolean;
  title: string;
  code: string;
  determined: boolean;
  contents: string;
  category: bookingList_BookingList_data_product_category | null;
  status: ProductStatus;
  inOrNor: string;
  info: string;
  caution: string | null;
  images: bookingList_BookingList_data_product_images[] | null;
  /**
   * 상품 하나에 대한 결제완료된 예약 총 인원
   */
  compeltePeopleCnt: number;
  /**
   * 취소를 제외한 상품 하나에 대한 모든 인원
   */
  peopleCount: number;
  keyWards: string[] | null;
  address: string;
  startPoint: string;
  maxMember: number;
  minMember: number;
  subTitle: string | null;
  adult_price: number;
  bookingCount: number;
  dateRange: number;
  kids_price: number;
  baby_price: number;
  isNotice: boolean | null;
  isOpen: boolean | null;
  type: ProductType;
  startDate: any;
  Dday: number;
  author: bookingList_BookingList_data_product_author | null;
}

export interface bookingList_BookingList_data {
  __typename: "Booking";
  _id: string;
  createdAt: any;
  cancelDate: any | null;
  gender: GENDER | null;
  age: string | null;
  payMethod: PayMethod;
  updatedAt: any;
  isDelete: boolean;
  leftTime: number;
  adultCount: number;
  kidCount: number;
  cancelMemo: string | null;
  babyCount: number;
  totalCount: number;
  message: string | null;
  isCancelRequest: boolean | null;
  bookerInclue: boolean;
  bookingPrice: number;
  status: BookingStatus | null;
  isMember: boolean | null;
  memo: string | null;
  code: string;
  groupCode: string;
  name: string;
  email: string;
  phoneNumber: string;
  /**
   * 결제가 되었는지
   */
  isPaid: boolean | null;
  payment: bookingList_BookingList_data_payment | null;
  product: bookingList_BookingList_data_product;
}

export interface bookingList_BookingList {
  __typename: "BookingListResponse";
  ok: boolean;
  error: bookingList_BookingList_error | null;
  page: bookingList_BookingList_page;
  data: bookingList_BookingList_data[];
}

export interface bookingList {
  BookingList: bookingList_BookingList;
}

export interface bookingListVariables {
  sort?: _BookingSort[] | null;
  filter?: _BookingFilter | null;
  pageInput: pageInput;
  isTimeOverExcept?: boolean | null;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: bookingCount
// ====================================================

export interface bookingCount_BookingList_error {
  __typename: "CustomError";
  location: string;
  severity: ERR_SEVERITY;
  code: ERR_CODE;
  message: string;
}

export interface bookingCount_BookingList_data {
  __typename: "Booking";
  _id: string;
}

export interface bookingCount_BookingList {
  __typename: "BookingListResponse";
  ok: boolean;
  error: bookingCount_BookingList_error | null;
  data: bookingCount_BookingList_data[];
}

export interface bookingCount {
  BookingList: bookingCount_BookingList;
}

export interface bookingCountVariables {
  filter?: _BookingFilter | null;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: bookingCancelReq
// ====================================================

export interface bookingCancelReq_BookingCancelReq_error {
  __typename: "CustomError";
  location: string;
  severity: ERR_SEVERITY;
  code: ERR_CODE;
  message: string;
}

export interface bookingCancelReq_BookingCancelReq {
  __typename: "BookingCancelReqResponse";
  ok: boolean;
  error: bookingCancelReq_BookingCancelReq_error | null;
}

export interface bookingCancelReq {
  BookingCancelReq: bookingCancelReq_BookingCancelReq;
}

export interface bookingCancelReqVariables {
  bookingId: string;
  reason: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: bookingCancelReject
// ====================================================

export interface bookingCancelReject_BookingCancelReject_error {
  __typename: "CustomError";
  location: string;
  severity: ERR_SEVERITY;
  code: ERR_CODE;
  message: string;
}

export interface bookingCancelReject_BookingCancelReject {
  __typename: "BookingCancelRejectResponse";
  ok: boolean;
  error: bookingCancelReject_BookingCancelReject_error | null;
}

export interface bookingCancelReject {
  BookingCancelReject: bookingCancelReject_BookingCancelReject;
}

export interface bookingCancelRejectVariables {
  bookingId: string;
  reason: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: bookingsCreate
// ====================================================

export interface bookingsCreate_BookingsCreate_error {
  __typename: "CustomError";
  location: string;
  severity: ERR_SEVERITY;
  code: ERR_CODE;
  message: string;
}

export interface bookingsCreate_BookingsCreate_data_product {
  __typename: "Product";
  title: string;
}

export interface bookingsCreate_BookingsCreate_data {
  __typename: "Booking";
  _id: string;
  createdAt: any;
  cancelDate: any | null;
  gender: GENDER | null;
  age: string | null;
  payMethod: PayMethod;
  updatedAt: any;
  isDelete: boolean;
  leftTime: number;
  adultCount: number;
  kidCount: number;
  cancelMemo: string | null;
  babyCount: number;
  totalCount: number;
  message: string | null;
  isCancelRequest: boolean | null;
  bookerInclue: boolean;
  bookingPrice: number;
  status: BookingStatus | null;
  isMember: boolean | null;
  memo: string | null;
  code: string;
  groupCode: string;
  name: string;
  email: string;
  phoneNumber: string;
  /**
   * 결제가 되었는지
   */
  isPaid: boolean | null;
  product: bookingsCreate_BookingsCreate_data_product;
}

export interface bookingsCreate_BookingsCreate {
  __typename: "BookingsCreateResponse";
  ok: boolean;
  error: bookingsCreate_BookingsCreate_error | null;
  data: bookingsCreate_BookingsCreate_data[] | null;
}

export interface bookingsCreate {
  BookingsCreate: bookingsCreate_BookingsCreate;
}

export interface bookingsCreateVariables {
  params: BookingsCreateInput[];
  payMethod: PayMethod;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: bookingDelete
// ====================================================

export interface bookingDelete_BookingDelete_error {
  __typename: "CustomError";
  location: string;
  severity: ERR_SEVERITY;
  code: ERR_CODE;
  message: string;
}

export interface bookingDelete_BookingDelete {
  __typename: "BookingDeleteResponse";
  ok: boolean;
  error: bookingDelete_BookingDelete_error | null;
}

export interface bookingDelete {
  BookingDelete: bookingDelete_BookingDelete;
}

export interface bookingDeleteVariables {
  id: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: bookingUpdate
// ====================================================

export interface bookingUpdate_BookingUpdate_error {
  __typename: "CustomError";
  location: string;
  severity: ERR_SEVERITY;
  code: ERR_CODE;
  message: string;
}

export interface bookingUpdate_BookingUpdate_data {
  __typename: "Booking";
  _id: string;
}

export interface bookingUpdate_BookingUpdate {
  __typename: "BookingUpdateResponse";
  ok: boolean;
  error: bookingUpdate_BookingUpdate_error | null;
  data: bookingUpdate_BookingUpdate_data | null;
}

export interface bookingUpdate {
  BookingUpdate: bookingUpdate_BookingUpdate;
}

export interface bookingUpdateVariables {
  params: BookingUpdateInput;
  id: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: bookingCreateByHand
// ====================================================

export interface bookingCreateByHand_BookingCreateByHand_error {
  __typename: "CustomError";
  location: string;
  severity: ERR_SEVERITY;
  code: ERR_CODE;
  message: string;
}

export interface bookingCreateByHand_BookingCreateByHand_data {
  __typename: "Booking";
  _id: string;
}

export interface bookingCreateByHand_BookingCreateByHand {
  __typename: "BookingCreateByHandResponse";
  ok: boolean;
  error: bookingCreateByHand_BookingCreateByHand_error | null;
  data: bookingCreateByHand_BookingCreateByHand_data | null;
}

export interface bookingCreateByHand {
  BookingCreateByHand: bookingCreateByHand_BookingCreateByHand;
}

export interface bookingCreateByHandVariables {
  isIgnoreMaxMember: boolean;
  params: BookingCreateByHandInput;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: bookingCompleteByHand
// ====================================================

export interface bookingCompleteByHand_BookingCompleteByHand_error {
  __typename: "CustomError";
  location: string;
  severity: ERR_SEVERITY;
  code: ERR_CODE;
  message: string;
}

export interface bookingCompleteByHand_BookingCompleteByHand_data {
  __typename: "Booking";
  _id: string;
}

export interface bookingCompleteByHand_BookingCompleteByHand {
  __typename: "BookingCompleteByHandResponse";
  ok: boolean;
  error: bookingCompleteByHand_BookingCompleteByHand_error | null;
  data: bookingCompleteByHand_BookingCompleteByHand_data | null;
}

export interface bookingCompleteByHand {
  BookingCompleteByHand: bookingCompleteByHand_BookingCompleteByHand;
}

export interface bookingCompleteByHandVariables {
  params: BookingCompleteByHandInput;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: bookingCancelByHand
// ====================================================

export interface bookingCancelByHand_BookingCancelByHand_error {
  __typename: "CustomError";
  location: string;
  severity: ERR_SEVERITY;
  code: ERR_CODE;
  message: string;
}

export interface bookingCancelByHand_BookingCancelByHand_data {
  __typename: "Booking";
  _id: string;
}

export interface bookingCancelByHand_BookingCancelByHand {
  __typename: "BookingCancelByHandResponse";
  ok: boolean;
  error: bookingCancelByHand_BookingCancelByHand_error | null;
  data: bookingCancelByHand_BookingCancelByHand_data | null;
}

export interface bookingCancelByHand {
  BookingCancelByHand: bookingCancelByHand_BookingCancelByHand;
}

export interface bookingCancelByHandVariables {
  params: BookingCancelByHandInput;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: bookingFindByCode
// ====================================================

export interface bookingFindByCode_BookingFindByCode_error {
  __typename: "CustomError";
  location: string;
  severity: ERR_SEVERITY;
  code: ERR_CODE;
  message: string;
}

export interface bookingFindByCode_BookingFindByCode_data_requestHistory {
  __typename: "RequestHistory";
  methodType: MethodType;
  reqType: RequestStatus;
  date: any;
  reason: string;
}

export interface bookingFindByCode_BookingFindByCode_data_bankTransInfo {
  __typename: "IBankTranInfo";
  accountHolder: string | null;
  accountNumber: string | null;
  bankName: string | null;
  bankTransfter: string | null;
}

export interface bookingFindByCode_BookingFindByCode_data_product_region {
  __typename: "Category";
  label: string;
  _id: string;
}

export interface bookingFindByCode_BookingFindByCode_data_product_category {
  __typename: "Category";
  _id: string;
  label: string;
}

export interface bookingFindByCode_BookingFindByCode_data_product_bookerSummary {
  __typename: "BookerSummary";
  adultCount: number;
  babyCount: number;
  kidsCount: number;
  completeBookCount: number;
  readyBookCount: number;
  cancelBookCount: number;
}

export interface bookingFindByCode_BookingFindByCode_data_product_itinerary_images {
  __typename: "File";
  name: string;
  uri: string;
  owner: string;
}

export interface bookingFindByCode_BookingFindByCode_data_product_itinerary {
  __typename: "Itinerary";
  _id: string;
  createdAt: any;
  updatedAt: any;
  isDelete: boolean;
  title: string;
  contents: string[];
  images: bookingFindByCode_BookingFindByCode_data_product_itinerary_images[];
  date: any;
}

export interface bookingFindByCode_BookingFindByCode_data_product_images {
  __typename: "File";
  name: string;
  uri: string;
  owner: string;
}

export interface bookingFindByCode_BookingFindByCode_data_product_thumb {
  __typename: "File";
  uri: string;
}

export interface bookingFindByCode_BookingFindByCode_data_product_author_busiRegistration {
  __typename: "File";
  name: string;
  uri: string;
  owner: string;
}

export interface bookingFindByCode_BookingFindByCode_data_product_author_profileImg {
  __typename: "File";
  uri: string;
}

export interface bookingFindByCode_BookingFindByCode_data_product_author_guideLicense {
  __typename: "File";
  name: string;
  uri: string;
  owner: string;
}

export interface bookingFindByCode_BookingFindByCode_data_product_author_guideLicenses {
  __typename: "File";
  name: string;
  uri: string;
  owner: string;
}

export interface bookingFindByCode_BookingFindByCode_data_product_author_bankImg {
  __typename: "File";
  name: string;
  uri: string;
  owner: string;
}

export interface bookingFindByCode_BookingFindByCode_data_product_author {
  __typename: "User";
  _id: string;
  /**
   * 닉네임 유니크
   */
  nickName: string;
  createdAt: any;
  updatedAt: any;
  isDelete: boolean;
  email: string;
  /**
   * 담당자명
   */
  manageName: string;
  connectionCount: number;
  role: UserRole;
  brith_date: string;
  address: string;
  address_detail: string;
  acceptSms: boolean;
  status: UserStatus;
  acceptEamil: boolean;
  /**
   * 매니저에 의한 회원가입 거절
   */
  isDenied: boolean | null;
  is_froreginer: boolean;
  /**
   * 기업 전화번호
   */
  busi_contact: string;
  /**
   * 담당자 연락처
   */
  manageContact: string;
  resignDate: any | null;
  gender: GENDER;
  busi_num: string;
  /**
   * 회원가입 거절 사유
   */
  denyReason: string | null;
  /**
   * 부서명
   */
  busi_department: string;
  isVerifiedManager: boolean;
  isVerifiedPhoneNumber: boolean;
  /**
   * 사업자 등록증
   */
  busiRegistration: bookingFindByCode_BookingFindByCode_data_product_author_busiRegistration | null;
  /**
   * 개인 법인인지 아닌지 체크함 True = 법인
   */
  is_priv_corper: boolean;
  /**
   * 사업자명
   */
  busi_name: string;
  busi_address: string;
  account_number: string;
  name: string;
  bank_name: string;
  resignReason: string | null;
  resignReasonType: string | null;
  isResigned: boolean | null;
  phoneNumber: string;
  /**
   * 프로필 사진
   */
  profileImg: bookingFindByCode_BookingFindByCode_data_product_author_profileImg | null;
  /**
   * 가이드 자격증
   */
  guideLicense: bookingFindByCode_BookingFindByCode_data_product_author_guideLicense | null;
  /**
   * 가이드 자격증들
   */
  guideLicenses: bookingFindByCode_BookingFindByCode_data_product_author_guideLicenses[] | null;
  /**
   * 주력언어
   */
  lang: Lang;
  /**
   * 통장사본
   */
  bankImg: bookingFindByCode_BookingFindByCode_data_product_author_bankImg | null;
}

export interface bookingFindByCode_BookingFindByCode_data_product {
  __typename: "Product";
  _id: string;
  title: string;
  code: string;
  createdAt: any;
  updatedAt: any;
  regionLabel: string | null;
  isDelete: boolean;
  lang: Lang;
  /**
   * 취소를 제외한 상품 하나에 대한 모든 인원
   */
  peopleCount: number;
  contents: string;
  determined: boolean;
  endDate: any;
  dateRange: number;
  adminMemo: string;
  groupCode: string;
  region: bookingFindByCode_BookingFindByCode_data_product_region | null;
  category: bookingFindByCode_BookingFindByCode_data_product_category | null;
  /**
   * 예약인원에 대한 요약
   */
  bookerSummary: bookingFindByCode_BookingFindByCode_data_product_bookerSummary;
  status: ProductStatus;
  itinerary: bookingFindByCode_BookingFindByCode_data_product_itinerary[];
  inOrNor: string;
  info: string;
  caution: string | null;
  images: bookingFindByCode_BookingFindByCode_data_product_images[] | null;
  keyWards: string[] | null;
  address: string;
  thumb: bookingFindByCode_BookingFindByCode_data_product_thumb | null;
  startPoint: string;
  maxMember: number;
  minMember: number;
  /**
   * 유저가 업데이트 요청을 했을때 어떤 변경이였는지 메모
   */
  requestMemo: string;
  subTitle: string | null;
  adult_price: number;
  bookingCount: number;
  kids_price: number;
  /**
   * 상품 하나에 대한 결제완료된 예약 총 인원
   */
  compeltePeopleCnt: number;
  baby_price: number;
  isNotice: boolean | null;
  elseReq: ProductReOpenReq | null;
  isOpen: boolean | null;
  type: ProductType;
  startDate: any;
  Dday: number;
  author: bookingFindByCode_BookingFindByCode_data_product_author | null;
}

export interface bookingFindByCode_BookingFindByCode_data_booker {
  __typename: "User";
  _id: string;
}

export interface bookingFindByCode_BookingFindByCode_data_travelers {
  __typename: "Traveler";
  name: string | null;
  phoneNumber: string;
  gender: GENDER | null;
  age: string;
}

export interface bookingFindByCode_BookingFindByCode_data_payment_history {
  __typename: "TxHistory";
  status: string;
  price: number;
  metadata: any | null;
  createdAt: any;
  updatedAt: any;
}

export interface bookingFindByCode_BookingFindByCode_data_payment {
  __typename: "Payment";
  _id: string;
  createdAt: any;
  updatedAt: any;
  isDelete: boolean;
  payMethod: PayMethod;
  status: PaymentStatus;
  price: number;
  totalCancelPrice: number;
  cancelDate: any | null;
  isPartialCancel: number;
  groupCode: string | null;
  history: bookingFindByCode_BookingFindByCode_data_payment_history[];
}

export interface bookingFindByCode_BookingFindByCode_data {
  __typename: "Booking";
  requestHistory: bookingFindByCode_BookingFindByCode_data_requestHistory[];
  bankTransInfo: bookingFindByCode_BookingFindByCode_data_bankTransInfo | null;
  product: bookingFindByCode_BookingFindByCode_data_product;
  _id: string;
  createdAt: any;
  cancelDate: any | null;
  gender: GENDER | null;
  age: string | null;
  payMethod: PayMethod;
  updatedAt: any;
  isDelete: boolean;
  leftTime: number;
  adultCount: number;
  kidCount: number;
  cancelMemo: string | null;
  babyCount: number;
  totalCount: number;
  message: string | null;
  isCancelRequest: boolean | null;
  bookerInclue: boolean;
  bookingPrice: number;
  status: BookingStatus | null;
  isMember: boolean | null;
  memo: string | null;
  code: string;
  groupCode: string;
  name: string;
  email: string;
  phoneNumber: string;
  /**
   * 결제가 되었는지
   */
  isPaid: boolean | null;
  booker: bookingFindByCode_BookingFindByCode_data_booker | null;
  travelers: bookingFindByCode_BookingFindByCode_data_travelers[] | null;
  payment: bookingFindByCode_BookingFindByCode_data_payment | null;
}

export interface bookingFindByCode_BookingFindByCode {
  __typename: "BookingFindByCodeResponse";
  ok: boolean;
  error: bookingFindByCode_BookingFindByCode_error | null;
  data: bookingFindByCode_BookingFindByCode_data | null;
}

export interface bookingFindByCode {
  BookingFindByCode: bookingFindByCode_BookingFindByCode;
}

export interface bookingFindByCodeVariables {
  code: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: categoryFindById
// ====================================================

export interface categoryFindById_CategoryFindById_error {
  __typename: "CustomError";
  location: string;
  severity: ERR_SEVERITY;
  code: ERR_CODE;
  message: string;
}

export interface categoryFindById_CategoryFindById_data_localeLabel {
  __typename: "Locale";
  ko: string;
  en: string;
  ja: string;
  chi: string;
}

export interface categoryFindById_CategoryFindById_data {
  __typename: "Category";
  _id: string;
  createdAt: any;
  updatedAt: any;
  isDelete: boolean;
  localeLabel: categoryFindById_CategoryFindById_data_localeLabel | null;
  label: string;
  type: CategoryType;
}

export interface categoryFindById_CategoryFindById {
  __typename: "CategoryFindByIdResponse";
  ok: boolean;
  error: categoryFindById_CategoryFindById_error | null;
  data: categoryFindById_CategoryFindById_data | null;
}

export interface categoryFindById {
  CategoryFindById: categoryFindById_CategoryFindById;
}

export interface categoryFindByIdVariables {
  id: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: categoryList
// ====================================================

export interface categoryList_CategoryList_error {
  __typename: "CustomError";
  location: string;
  severity: ERR_SEVERITY;
  code: ERR_CODE;
  message: string;
}

export interface categoryList_CategoryList_data_localeLabel {
  __typename: "Locale";
  ko: string;
  en: string;
  ja: string;
  chi: string;
}

export interface categoryList_CategoryList_data {
  __typename: "Category";
  _id: string;
  createdAt: any;
  updatedAt: any;
  isDelete: boolean;
  localeLabel: categoryList_CategoryList_data_localeLabel | null;
  label: string;
  type: CategoryType;
}

export interface categoryList_CategoryList {
  __typename: "CategoryListResponse";
  ok: boolean;
  error: categoryList_CategoryList_error | null;
  data: categoryList_CategoryList_data[] | null;
}

export interface categoryList {
  CategoryList: categoryList_CategoryList;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: categoryCreate
// ====================================================

export interface categoryCreate_CategoryCreate_error {
  __typename: "CustomError";
  location: string;
  severity: ERR_SEVERITY;
  code: ERR_CODE;
  message: string;
}

export interface categoryCreate_CategoryCreate_data_localeLabel {
  __typename: "Locale";
  ko: string;
  en: string;
  ja: string;
  chi: string;
}

export interface categoryCreate_CategoryCreate_data {
  __typename: "Category";
  _id: string;
  createdAt: any;
  updatedAt: any;
  isDelete: boolean;
  localeLabel: categoryCreate_CategoryCreate_data_localeLabel | null;
  label: string;
  type: CategoryType;
}

export interface categoryCreate_CategoryCreate {
  __typename: "CategoryCreateResponse";
  ok: boolean;
  error: categoryCreate_CategoryCreate_error | null;
  data: categoryCreate_CategoryCreate_data | null;
}

export interface categoryCreate {
  CategoryCreate: categoryCreate_CategoryCreate;
}

export interface categoryCreateVariables {
  params: CategoryCreateInput;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: categoryDelete
// ====================================================

export interface categoryDelete_CategoryDelete_error {
  __typename: "CustomError";
  location: string;
  severity: ERR_SEVERITY;
  code: ERR_CODE;
  message: string;
}

export interface categoryDelete_CategoryDelete_data_localeLabel {
  __typename: "Locale";
  ko: string;
  en: string;
  ja: string;
  chi: string;
}

export interface categoryDelete_CategoryDelete_data {
  __typename: "Category";
  _id: string;
  createdAt: any;
  updatedAt: any;
  isDelete: boolean;
  localeLabel: categoryDelete_CategoryDelete_data_localeLabel | null;
  label: string;
  type: CategoryType;
}

export interface categoryDelete_CategoryDelete {
  __typename: "CategoryDeleteResponse";
  ok: boolean;
  error: categoryDelete_CategoryDelete_error | null;
  data: categoryDelete_CategoryDelete_data | null;
}

export interface categoryDelete {
  CategoryDelete: categoryDelete_CategoryDelete;
}

export interface categoryDeleteVariables {
  id: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: categoryUpdate
// ====================================================

export interface categoryUpdate_CategoryUpdate_error {
  __typename: "CustomError";
  location: string;
  severity: ERR_SEVERITY;
  code: ERR_CODE;
  message: string;
}

export interface categoryUpdate_CategoryUpdate_data_localeLabel {
  __typename: "Locale";
  ko: string;
  en: string;
  ja: string;
  chi: string;
}

export interface categoryUpdate_CategoryUpdate_data {
  __typename: "Category";
  _id: string;
  createdAt: any;
  updatedAt: any;
  isDelete: boolean;
  localeLabel: categoryUpdate_CategoryUpdate_data_localeLabel | null;
  label: string;
  type: CategoryType;
}

export interface categoryUpdate_CategoryUpdate {
  __typename: "CategoryUpdateResponse";
  ok: boolean;
  error: categoryUpdate_CategoryUpdate_error | null;
  data: categoryUpdate_CategoryUpdate_data | null;
}

export interface categoryUpdate {
  CategoryUpdate: categoryUpdate_CategoryUpdate;
}

export interface categoryUpdateVariables {
  params: CategoryUpdateInput;
  id: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: count
// ====================================================

export interface count_Count_error {
  __typename: "CustomError";
  location: string;
  severity: ERR_SEVERITY;
  code: ERR_CODE;
  message: string;
}

export interface count_Count_data {
  __typename: "Count";
  /**
   * 나의 총 구매갯수
   */
  buyTotalCount: number;
  salesTotalCount: number | null;
  settleUnsolvedRequestCount: number | null;
  productRegistCount: number | null;
  /**
   * 나의 이번달 판매 횟수
   */
  salesOfThisMonth: number;
  /**
   * 나의 저번달 판매 횟수
   */
  salesofLastMonth: number;
  /**
   * 나의 전체 판매 횟수
   */
  totalSalesCount: number;
  /**
   * 나의 현재 받을 수 있는 돈
   */
  settleAvaiableAmount: number;
}

export interface count_Count {
  __typename: "CountResponse";
  ok: boolean;
  error: count_Count_error | null;
  data: count_Count_data | null;
}

export interface count {
  Count: count_Count;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: countManager
// ====================================================

export interface countManager_Count_error {
  __typename: "CustomError";
  location: string;
  severity: ERR_SEVERITY;
  code: ERR_CODE;
  message: string;
}

export interface countManager_Count_data {
  __typename: "Count";
  /**
   * 나의 총 구매갯수
   */
  buyTotalCount: number;
  salesTotalCount: number | null;
  settleUnsolvedRequestCount: number | null;
  productRegistCount: number | null;
  /**
   * 나의 이번달 판매 횟수
   */
  salesOfThisMonth: number;
  /**
   * 나의 저번달 판매 횟수
   */
  salesofLastMonth: number;
  /**
   * 나의 전체 판매 횟수
   */
  totalSalesCount: number;
  /**
   * 나의 현재 받을 수 있는 돈
   */
  settleAvaiableAmount: number;
  /**
   * 전~체 투어수
   */
  totalTourCount: number;
  /**
   * 전~체 체험수
   */
  totalExpCount: number;
  /**
   * 나의 전체 상품수
   */
  totalProdCount: number;
  /**
   * 마스터용::가입된 총 구매자수
   */
  buyerCount: number;
  /**
   * 마스터 취소요청 갯수
   */
  bookingCancelReqCount: number;
  /**
   * 판매자(나)의 오늘 총 예약
   */
  todayBookingCount: number;
  /**
   * 마스터용::전체중 만료된 카운트
   */
  expireProductCountMaster: number;
  /**
   * 마스터용::상품 수정 요청수
   */
  updateRequestCountMaster: number;
  /**
   * 마스터용::가입된 가이드 인원수
   */
  busiPartnerBCountMaster: number;
  /**
   * 마스터용::가입된 가이드 인원수
   */
  busiPartnerCountMaster: number;
  /**
   * 마스터용::전체 예약수
   */
  totalBookingCountMaster: number;
  /**
   * 마스터용::전체중 대기중인 예약수
   */
  readyBookingCountMaster: number;
  /**
   * 마스터용::전체중 상품중 출발 확정인 수
   */
  determiendProductCountMaster: number;
  /**
   * 마스터용::전체중 상품수
   */
  totalProductCountMaster: number;
  /**
   * 마스터용:: 부킹 취소 완료 카운트
   */
  totalCancelCompleteCount: number;
  /**
   * 마스터용::전체중 취소한 예약수
   */
  cancelBookingCountMaster: number;
  /**
   * 마스터용::전체중 완료 예약수
   */
  compeltedBookingCountMaster: number;
  /**
   * 마스터용::전체중 상품중 판매중지수
   */
  cancelProductCountMaster: number;
  /**
   * 마스터용::전체중 상품중 업데이트 거절건
   */
  updateRequestRefuseCountMaster: number;
  /**
   * 마스터용::전체중 상품중 출발 미확정 수
   */
  undeterMinedProductCountMaster: number;
  /**
   * 마스터용::전체중 상품중 기획 거절건
   */
  refusedCountMaster: number;
  /**
   * 마스터용::전체중 상품중 기획 요청 수
   */
  createRequestCountMaster: number;
  /**
   * 나의 취소 환수금
   */
  cancelReturnPrice: number;
  /**
   * 마스터용::요청 정산 요청 수
   */
  settlementRequestCountMaster: number;
  /**
   * 판매자용::상품 수정 요청수
   */
  elseReqCount: number;
  /**
   * 마스터용::전체중 상품중 판매완료수
   */
  compeltedProductCountMaster: number;
  /**
   * 마스터용:: 투어 부킹 카운트
   */
  tourBookingCountMaster: number;
  /**
   * 마스터용:: 체험 부킹 카운트
   */
  expBookingCountMaster: number;
  /**
   * 마스터용::멤버 외국인 수
   */
  foreginMemberCount: number;
  /**
   * 마스터용::내국인 멤버 수
   */
  koreanMemberCount: number;
  /**
   * 마스터용::일반 회원 수
   */
  totalIndiMemberCount: number;
  /**
   * 마스터용::가이드 유저증 승인 유저수
   */
  confimedBusiPartnerCount: number;
  /**
   * 마스터용::가이드 유저증 미승인 유저수
   */
  unConfimedBusiPartnerCount: number;
  /**
   * 마스터용::가이드 유저증 확인안된 유저수
   */
  unConfimedPartnerCount: number;
  /**
   * 마스터용::가이드 유저증 확인안된 유저수
   */
  confimedPartnerCount: number;
  /**
   * 마스터용::정산 완료 수
   */
  totalSettlementCount: number;
  /**
   * 마스터용::정산 완료 수
   */
  settlementReadyCountMater: number;
  /**
   * 마스터용::취소 요청 수
   */
  cancelReqBookingCountMaster: number;
  /**
   * 마스터용::정산 완료 수
   */
  settlementCompleteCountMaster: number;
  /**
   * 마스터용::가이드 회원 수
   */
  totalPartnerMemberCount: number;
  /**
   * 마스터용:: 답변 질문수
   */
  answeredQuestionCount: number;
  /**
   * 마스터용::전체중 판매중 상품수
   */
  openProductCountMaster: number;
  /**
   * 미답변 질문수
   */
  unAnsweredQuestionCount: number;
  /**
   * 나의 투어 횟수
   */
  countOfTourBooking: number;
  /**
   * 구매자(나)의 체험 횟수
   */
  countOfExpBooking: number;
}

export interface countManager_Count {
  __typename: "CountResponse";
  ok: boolean;
  error: countManager_Count_error | null;
  data: countManager_Count_data | null;
}

export interface countManager {
  Count: countManager_Count;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: feePolicyFindOne
// ====================================================

export interface feePolicyFindOne_FeePolicyFindOne_error {
  __typename: "CustomError";
  location: string;
  severity: ERR_SEVERITY;
  code: ERR_CODE;
  message: string;
}

export interface feePolicyFindOne_FeePolicyFindOne_data_addtionalFees {
  __typename: "AddtionalFees";
  feeName: string;
  target: TargetStatus;
  type: AddtionalFeesStatus;
  feePercent: number;
  fee: number;
}

export interface feePolicyFindOne_FeePolicyFindOne_data {
  __typename: "FeePolicy";
  _id: string;
  createdAt: any;
  updatedAt: any;
  isDelete: boolean;
  status: FeePolicyStatus;
  niceCardPercent: number;
  jandaCardPercent: number;
  cardPercent: number;
  bankPercent: number;
  addtionalFees: feePolicyFindOne_FeePolicyFindOne_data_addtionalFees[];
}

export interface feePolicyFindOne_FeePolicyFindOne {
  __typename: "FeePolicyFindOneResponse";
  ok: boolean;
  error: feePolicyFindOne_FeePolicyFindOne_error | null;
  data: feePolicyFindOne_FeePolicyFindOne_data | null;
}

export interface feePolicyFindOne {
  FeePolicyFindOne: feePolicyFindOne_FeePolicyFindOne;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: feePolicyUpdate
// ====================================================

export interface feePolicyUpdate_FeePolicyUpdate_error {
  __typename: "CustomError";
  location: string;
  severity: ERR_SEVERITY;
  code: ERR_CODE;
  message: string;
}

export interface feePolicyUpdate_FeePolicyUpdate_data_addtionalFees {
  __typename: "AddtionalFees";
  feeName: string;
  target: TargetStatus;
  type: AddtionalFeesStatus;
  feePercent: number;
  fee: number;
}

export interface feePolicyUpdate_FeePolicyUpdate_data {
  __typename: "FeePolicy";
  _id: string;
  createdAt: any;
  updatedAt: any;
  isDelete: boolean;
  status: FeePolicyStatus;
  niceCardPercent: number;
  jandaCardPercent: number;
  cardPercent: number;
  bankPercent: number;
  addtionalFees: feePolicyUpdate_FeePolicyUpdate_data_addtionalFees[];
}

export interface feePolicyUpdate_FeePolicyUpdate {
  __typename: "FeePolicyUpdateResponse";
  ok: boolean;
  error: feePolicyUpdate_FeePolicyUpdate_error | null;
  data: feePolicyUpdate_FeePolicyUpdate_data | null;
}

export interface feePolicyUpdate {
  FeePolicyUpdate: feePolicyUpdate_FeePolicyUpdate;
}

export interface feePolicyUpdateVariables {
  params: FeePolicyUpdateInput;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: groupFindByKey
// ====================================================

export interface groupFindByKey_GroupFindByKey_error {
  __typename: "CustomError";
  location: string;
  severity: ERR_SEVERITY;
  code: ERR_CODE;
  message: string;
}

export interface groupFindByKey_GroupFindByKey_data_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface groupFindByKey_GroupFindByKey_data {
  __typename: "Group";
  _id: string;
  createdAt: any;
  updatedAt: any;
  isDelete: boolean;
  /**
   * 어떤 모델을 대상으로 정렬을 하는지 정의함
   */
  target: string;
  /**
   * 이 그룹을 호출하기 위한 Uniq한 key값
   */
  key: string;
  label: string;
  /**
   * 그룹안의 순서는 이 배열의 인덱스로 조정됨
   */
  members: string[];
  tags: groupFindByKey_GroupFindByKey_data_tags[] | null;
}

export interface groupFindByKey_GroupFindByKey {
  __typename: "GroupFindByKeyResponse";
  ok: boolean;
  error: groupFindByKey_GroupFindByKey_error | null;
  data: groupFindByKey_GroupFindByKey_data | null;
}

export interface groupFindByKey {
  GroupFindByKey: groupFindByKey_GroupFindByKey;
}

export interface groupFindByKeyVariables {
  key: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: groupList
// ====================================================

export interface groupList_GroupList_error {
  __typename: "CustomError";
  location: string;
  severity: ERR_SEVERITY;
  code: ERR_CODE;
  message: string;
}

export interface groupList_GroupList_data_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface groupList_GroupList_data {
  __typename: "Group";
  _id: string;
  createdAt: any;
  updatedAt: any;
  isDelete: boolean;
  /**
   * 어떤 모델을 대상으로 정렬을 하는지 정의함
   */
  target: string;
  /**
   * 이 그룹을 호출하기 위한 Uniq한 key값
   */
  key: string;
  label: string;
  /**
   * 그룹안의 순서는 이 배열의 인덱스로 조정됨
   */
  members: string[];
  tags: groupList_GroupList_data_tags[] | null;
}

export interface groupList_GroupList {
  __typename: "GroupListResponse";
  ok: boolean;
  error: groupList_GroupList_error | null;
  data: groupList_GroupList_data[] | null;
}

export interface groupList {
  GroupList: groupList_GroupList;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: groupCreate
// ====================================================

export interface groupCreate_GroupCreate_error {
  __typename: "CustomError";
  location: string;
  severity: ERR_SEVERITY;
  code: ERR_CODE;
  message: string;
}

export interface groupCreate_GroupCreate_data_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface groupCreate_GroupCreate_data {
  __typename: "Group";
  _id: string;
  createdAt: any;
  updatedAt: any;
  isDelete: boolean;
  /**
   * 어떤 모델을 대상으로 정렬을 하는지 정의함
   */
  target: string;
  /**
   * 이 그룹을 호출하기 위한 Uniq한 key값
   */
  key: string;
  label: string;
  /**
   * 그룹안의 순서는 이 배열의 인덱스로 조정됨
   */
  members: string[];
  tags: groupCreate_GroupCreate_data_tags[] | null;
}

export interface groupCreate_GroupCreate {
  __typename: "GroupCreateResponse";
  ok: boolean;
  error: groupCreate_GroupCreate_error | null;
  data: groupCreate_GroupCreate_data | null;
}

export interface groupCreate {
  GroupCreate: groupCreate_GroupCreate;
}

export interface groupCreateVariables {
  params: GroupCreateInput;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: groupDelete
// ====================================================

export interface groupDelete_GroupDelete_error {
  __typename: "CustomError";
  location: string;
  severity: ERR_SEVERITY;
  code: ERR_CODE;
  message: string;
}

export interface groupDelete_GroupDelete_data_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface groupDelete_GroupDelete_data {
  __typename: "Group";
  _id: string;
  createdAt: any;
  updatedAt: any;
  isDelete: boolean;
  /**
   * 어떤 모델을 대상으로 정렬을 하는지 정의함
   */
  target: string;
  /**
   * 이 그룹을 호출하기 위한 Uniq한 key값
   */
  key: string;
  label: string;
  /**
   * 그룹안의 순서는 이 배열의 인덱스로 조정됨
   */
  members: string[];
  tags: groupDelete_GroupDelete_data_tags[] | null;
}

export interface groupDelete_GroupDelete {
  __typename: "GroupDeleteResponse";
  ok: boolean;
  error: groupDelete_GroupDelete_error | null;
  data: groupDelete_GroupDelete_data | null;
}

export interface groupDelete {
  GroupDelete: groupDelete_GroupDelete;
}

export interface groupDeleteVariables {
  key: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: groupUpdate
// ====================================================

export interface groupUpdate_GroupUpdate_error {
  __typename: "CustomError";
  location: string;
  severity: ERR_SEVERITY;
  code: ERR_CODE;
  message: string;
}

export interface groupUpdate_GroupUpdate_data_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface groupUpdate_GroupUpdate_data {
  __typename: "Group";
  _id: string;
  createdAt: any;
  updatedAt: any;
  isDelete: boolean;
  /**
   * 어떤 모델을 대상으로 정렬을 하는지 정의함
   */
  target: string;
  /**
   * 이 그룹을 호출하기 위한 Uniq한 key값
   */
  key: string;
  label: string;
  /**
   * 그룹안의 순서는 이 배열의 인덱스로 조정됨
   */
  members: string[];
  tags: groupUpdate_GroupUpdate_data_tags[] | null;
}

export interface groupUpdate_GroupUpdate {
  __typename: "GroupUpdateResponse";
  ok: boolean;
  error: groupUpdate_GroupUpdate_error | null;
  data: groupUpdate_GroupUpdate_data | null;
}

export interface groupUpdate {
  GroupUpdate: groupUpdate_GroupUpdate;
}

export interface groupUpdateVariables {
  params: GroupUpdateInput;
  key: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: homepage
// ====================================================

export interface homepage_Homepage_error {
  __typename: "CustomError";
  location: string;
  severity: ERR_SEVERITY;
  code: ERR_CODE;
  message: string;
}

export interface homepage_Homepage_data_logo {
  __typename: "File";
  name: string;
  uri: string;
  owner: string;
}

export interface homepage_Homepage_data_partnerFooter {
  __typename: "File";
  name: string;
  uri: string;
  owner: string;
}

export interface homepage_Homepage_data_logoTop {
  __typename: "File";
  name: string;
  uri: string;
  owner: string;
}

export interface homepage_Homepage_data_logoBottom {
  __typename: "File";
  name: string;
  uri: string;
  owner: string;
}

export interface homepage_Homepage_data_bannerA_img {
  __typename: "File";
  name: string;
  uri: string;
  owner: string;
}

export interface homepage_Homepage_data_bannerA {
  __typename: "Banner";
  img: homepage_Homepage_data_bannerA_img | null;
  link: string;
  target: string;
  use: boolean;
}

export interface homepage_Homepage_data_bannerB_img {
  __typename: "File";
  name: string;
  uri: string;
  owner: string;
}

export interface homepage_Homepage_data_bannerB {
  __typename: "Banner";
  img: homepage_Homepage_data_bannerB_img | null;
  link: string;
  target: string;
  use: boolean;
}

export interface homepage_Homepage_data_bankInfo {
  __typename: "BankInfo";
  accountHolder: string | null;
  accountNumber: string | null;
  bankName: string | null;
}

export interface homepage_Homepage_data_modal {
  __typename: "Modal";
  _id: string;
  link: string | null;
  startDate: any;
  endDate: any;
  content: string | null;
  linkBehavior: LinkBehavior | null;
  style: any;
  title: string;
  priority: number | null;
  createdAt: any;
  open: boolean;
}

export interface homepage_Homepage_data {
  __typename: "Homepage";
  logo: homepage_Homepage_data_logo | null;
  address: string;
  addressUrl: string;
  siteDesc: string;
  siteKeyWards: string[];
  contact: string;
  siteName: string;
  signUpRedirect: string;
  blacklist: string[];
  partnerFooter: homepage_Homepage_data_partnerFooter[] | null;
  productSamples: string[];
  instaLink: string | null;
  blogLink: string | null;
  facebookLink: string | null;
  twitterLink: string | null;
  busiNumber: string;
  email: string;
  ceoName: string;
  /**
   * 영업시간
   */
  openTime: string;
  loginRedirect: string;
  loginOutRedirect: string;
  PrivacyPolicy: string;
  partnerBpolicy: string;
  usePolicy: string;
  travelerPolicy: string;
  partnerPolicy: string;
  marketingPolic: string;
  logoTop: homepage_Homepage_data_logoTop | null;
  logoBottom: homepage_Homepage_data_logoBottom | null;
  bannerA: homepage_Homepage_data_bannerA;
  bannerB: homepage_Homepage_data_bannerB;
  /**
   * 통신판매 번호
   */
  degitalSalesNumber: string | null;
  copyRight: string | null;
  bankInfo: homepage_Homepage_data_bankInfo | null;
  thirdPolicy: string;
  modal: homepage_Homepage_data_modal[];
}

export interface homepage_Homepage {
  __typename: "HomepageResponse";
  ok: boolean;
  error: homepage_Homepage_error | null;
  data: homepage_Homepage_data | null;
}

export interface homepage {
  Homepage: homepage_Homepage;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: homepageUpdate
// ====================================================

export interface homepageUpdate_HomepageUpdate_error {
  __typename: "CustomError";
  location: string;
  severity: ERR_SEVERITY;
  code: ERR_CODE;
  message: string;
}

export interface homepageUpdate_HomepageUpdate_data_logo {
  __typename: "File";
  name: string;
  uri: string;
  owner: string;
}

export interface homepageUpdate_HomepageUpdate_data_partnerFooter {
  __typename: "File";
  name: string;
  uri: string;
  owner: string;
}

export interface homepageUpdate_HomepageUpdate_data_logoTop {
  __typename: "File";
  name: string;
  uri: string;
  owner: string;
}

export interface homepageUpdate_HomepageUpdate_data_logoBottom {
  __typename: "File";
  name: string;
  uri: string;
  owner: string;
}

export interface homepageUpdate_HomepageUpdate_data_bannerA_img {
  __typename: "File";
  name: string;
  uri: string;
  owner: string;
}

export interface homepageUpdate_HomepageUpdate_data_bannerA {
  __typename: "Banner";
  img: homepageUpdate_HomepageUpdate_data_bannerA_img | null;
  link: string;
  target: string;
  use: boolean;
}

export interface homepageUpdate_HomepageUpdate_data_bannerB_img {
  __typename: "File";
  name: string;
  uri: string;
  owner: string;
}

export interface homepageUpdate_HomepageUpdate_data_bannerB {
  __typename: "Banner";
  img: homepageUpdate_HomepageUpdate_data_bannerB_img | null;
  link: string;
  target: string;
  use: boolean;
}

export interface homepageUpdate_HomepageUpdate_data_bankInfo {
  __typename: "BankInfo";
  accountHolder: string | null;
  accountNumber: string | null;
  bankName: string | null;
}

export interface homepageUpdate_HomepageUpdate_data_modal {
  __typename: "Modal";
  _id: string;
  link: string | null;
  startDate: any;
  endDate: any;
  content: string | null;
  linkBehavior: LinkBehavior | null;
  style: any;
  title: string;
  priority: number | null;
  createdAt: any;
  open: boolean;
}

export interface homepageUpdate_HomepageUpdate_data {
  __typename: "Homepage";
  logo: homepageUpdate_HomepageUpdate_data_logo | null;
  address: string;
  addressUrl: string;
  siteDesc: string;
  siteKeyWards: string[];
  contact: string;
  siteName: string;
  signUpRedirect: string;
  blacklist: string[];
  partnerFooter: homepageUpdate_HomepageUpdate_data_partnerFooter[] | null;
  productSamples: string[];
  instaLink: string | null;
  blogLink: string | null;
  facebookLink: string | null;
  twitterLink: string | null;
  busiNumber: string;
  email: string;
  ceoName: string;
  /**
   * 영업시간
   */
  openTime: string;
  loginRedirect: string;
  loginOutRedirect: string;
  PrivacyPolicy: string;
  partnerBpolicy: string;
  usePolicy: string;
  travelerPolicy: string;
  partnerPolicy: string;
  marketingPolic: string;
  logoTop: homepageUpdate_HomepageUpdate_data_logoTop | null;
  logoBottom: homepageUpdate_HomepageUpdate_data_logoBottom | null;
  bannerA: homepageUpdate_HomepageUpdate_data_bannerA;
  bannerB: homepageUpdate_HomepageUpdate_data_bannerB;
  /**
   * 통신판매 번호
   */
  degitalSalesNumber: string | null;
  copyRight: string | null;
  bankInfo: homepageUpdate_HomepageUpdate_data_bankInfo | null;
  thirdPolicy: string;
  modal: homepageUpdate_HomepageUpdate_data_modal[];
}

export interface homepageUpdate_HomepageUpdate {
  __typename: "HomepageUpdateResponse";
  ok: boolean;
  error: homepageUpdate_HomepageUpdate_error | null;
  data: homepageUpdate_HomepageUpdate_data | null;
}

export interface homepageUpdate {
  HomepageUpdate: homepageUpdate_HomepageUpdate;
}

export interface homepageUpdateVariables {
  params: HomepageUpdateInput;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: pageInfoCreate
// ====================================================

export interface pageInfoCreate_PageInfoCreate_error {
  __typename: "CustomError";
  location: string;
  severity: ERR_SEVERITY;
  code: ERR_CODE;
  message: string;
}

export interface pageInfoCreate_PageInfoCreate {
  __typename: "PageInfoCreateResponse";
  ok: boolean;
  error: pageInfoCreate_PageInfoCreate_error | null;
}

export interface pageInfoCreate {
  PageInfoCreate: pageInfoCreate_PageInfoCreate;
}

export interface pageInfoCreateVariables {
  params: PageInfoCreateInput;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: multiUpload
// ====================================================

export interface multiUpload_MultiUpload_error {
  __typename: "CustomError";
  location: string;
  severity: ERR_SEVERITY;
  code: ERR_CODE;
  message: string;
}

export interface multiUpload_MultiUpload_data {
  __typename: "File";
  name: string;
  uri: string;
  owner: string;
}

export interface multiUpload_MultiUpload {
  __typename: "FileUploadsResponse";
  ok: boolean;
  error: multiUpload_MultiUpload_error | null;
  data: multiUpload_MultiUpload_data[] | null;
}

export interface multiUpload {
  MultiUpload: multiUpload_MultiUpload;
}

export interface multiUploadVariables {
  file: any;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: pageInfoDelete
// ====================================================

export interface pageInfoDelete_PageInfoDelete_error {
  __typename: "CustomError";
  location: string;
  severity: ERR_SEVERITY;
  code: ERR_CODE;
  message: string;
}

export interface pageInfoDelete_PageInfoDelete_data {
  __typename: "PageInfo";
  _id: string;
  updatedAt: any;
  isDelete: boolean;
  key: string;
  value: any;
}

export interface pageInfoDelete_PageInfoDelete {
  __typename: "PageInfoDeleteResponse";
  ok: boolean;
  error: pageInfoDelete_PageInfoDelete_error | null;
  data: pageInfoDelete_PageInfoDelete_data | null;
}

export interface pageInfoDelete {
  PageInfoDelete: pageInfoDelete_PageInfoDelete;
}

export interface pageInfoDeleteVariables {
  key: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: pageInfoUpdate
// ====================================================

export interface pageInfoUpdate_PageInfoUpdate_error {
  __typename: "CustomError";
  location: string;
  severity: ERR_SEVERITY;
  code: ERR_CODE;
  message: string;
}

export interface pageInfoUpdate_PageInfoUpdate_data {
  __typename: "PageInfo";
  _id: string;
  updatedAt: any;
  isDelete: boolean;
  key: string;
  value: any;
}

export interface pageInfoUpdate_PageInfoUpdate {
  __typename: "PageInfoUpdateResponse";
  ok: boolean;
  error: pageInfoUpdate_PageInfoUpdate_error | null;
  data: pageInfoUpdate_PageInfoUpdate_data | null;
}

export interface pageInfoUpdate {
  PageInfoUpdate: pageInfoUpdate_PageInfoUpdate;
}

export interface pageInfoUpdateVariables {
  params: PageInfoUpdateInput;
  key: string;
  guideParams?: UserUpdateInput | null;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: newsFindById
// ====================================================

export interface newsFindById_NewsFindById_error {
  __typename: "CustomError";
  location: string;
  severity: ERR_SEVERITY;
  code: ERR_CODE;
  message: string;
}

export interface newsFindById_NewsFindById_data_author_busiRegistration {
  __typename: "File";
  name: string;
  uri: string;
  owner: string;
}

export interface newsFindById_NewsFindById_data_author_profileImg {
  __typename: "File";
  uri: string;
}

export interface newsFindById_NewsFindById_data_author_guideLicense {
  __typename: "File";
  name: string;
  uri: string;
  owner: string;
}

export interface newsFindById_NewsFindById_data_author_guideLicenses {
  __typename: "File";
  name: string;
  uri: string;
  owner: string;
}

export interface newsFindById_NewsFindById_data_author_bankImg {
  __typename: "File";
  name: string;
  uri: string;
  owner: string;
}

export interface newsFindById_NewsFindById_data_author {
  __typename: "User";
  _id: string;
  /**
   * 닉네임 유니크
   */
  nickName: string;
  createdAt: any;
  updatedAt: any;
  isDelete: boolean;
  email: string;
  /**
   * 담당자명
   */
  manageName: string;
  connectionCount: number;
  role: UserRole;
  brith_date: string;
  address: string;
  address_detail: string;
  acceptSms: boolean;
  status: UserStatus;
  acceptEamil: boolean;
  /**
   * 매니저에 의한 회원가입 거절
   */
  isDenied: boolean | null;
  is_froreginer: boolean;
  /**
   * 기업 전화번호
   */
  busi_contact: string;
  /**
   * 담당자 연락처
   */
  manageContact: string;
  resignDate: any | null;
  gender: GENDER;
  busi_num: string;
  /**
   * 회원가입 거절 사유
   */
  denyReason: string | null;
  /**
   * 부서명
   */
  busi_department: string;
  isVerifiedManager: boolean;
  isVerifiedPhoneNumber: boolean;
  /**
   * 사업자 등록증
   */
  busiRegistration: newsFindById_NewsFindById_data_author_busiRegistration | null;
  /**
   * 개인 법인인지 아닌지 체크함 True = 법인
   */
  is_priv_corper: boolean;
  /**
   * 사업자명
   */
  busi_name: string;
  busi_address: string;
  account_number: string;
  name: string;
  bank_name: string;
  resignReason: string | null;
  resignReasonType: string | null;
  isResigned: boolean | null;
  phoneNumber: string;
  /**
   * 프로필 사진
   */
  profileImg: newsFindById_NewsFindById_data_author_profileImg | null;
  /**
   * 가이드 자격증
   */
  guideLicense: newsFindById_NewsFindById_data_author_guideLicense | null;
  /**
   * 가이드 자격증들
   */
  guideLicenses: newsFindById_NewsFindById_data_author_guideLicenses[] | null;
  /**
   * 주력언어
   */
  lang: Lang;
  /**
   * 통장사본
   */
  bankImg: newsFindById_NewsFindById_data_author_bankImg | null;
}

export interface newsFindById_NewsFindById_data_attachFiles {
  __typename: "File";
  name: string;
  uri: string;
  owner: string;
}

export interface newsFindById_NewsFindById_data_thumb {
  __typename: "File";
  name: string;
  uri: string;
  owner: string;
}

export interface newsFindById_NewsFindById_data {
  __typename: "News";
  _id: string;
  createdAt: any;
  updatedAt: any;
  isDelete: boolean;
  title: string;
  contents: string;
  author: newsFindById_NewsFindById_data_author | null;
  isNotice: boolean | null;
  isOpen: boolean | null;
  summary: string | null;
  subTitle: string | null;
  keyWards: string[] | null;
  attachFiles: newsFindById_NewsFindById_data_attachFiles[] | null;
  thumb: newsFindById_NewsFindById_data_thumb | null;
  viewCount: number;
  type: NEWS_TYPE;
}

export interface newsFindById_NewsFindById {
  __typename: "NewsFindByIdResponse";
  ok: boolean;
  error: newsFindById_NewsFindById_error | null;
  data: newsFindById_NewsFindById_data | null;
}

export interface newsFindById {
  NewsFindById: newsFindById_NewsFindById;
}

export interface newsFindByIdVariables {
  id: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: newsList
// ====================================================

export interface newsList_NewsList_error {
  __typename: "CustomError";
  location: string;
  severity: ERR_SEVERITY;
  code: ERR_CODE;
  message: string;
}

export interface newsList_NewsList_page {
  __typename: "Page";
  /**
   * 현재 페이지 번호
   */
  page: number;
  /**
   * 페이지당 문서 갯수
   */
  cntPerPage: number;
  /**
   * 페이지 총 갯수
   */
  totalPageSize: number;
  /**
   * 시작 페이지 번호
   */
  start_page_num: number;
  /**
   * 마지막 페이지 번호
   */
  end_page_num: number;
  /**
   * 이전(<<) 표시 여부
   */
  isPrev: boolean;
  /**
   * 다음(>>) 표시 여부
   */
  isNext: boolean;
  /**
   * 이전(<<) 클릭시 표시할 페이지 번호
   */
  prev_page_num: number;
  /**
   * 다음(>>) 클릭시 표시할 페이지 번호
   */
  next_page_num: number;
  /**
   * 총 갯수
   */
  totalCount: number;
  /**
   * 마지막 패이지의 갯수 (index계산 하는데 사용함)
   */
  remainder: number;
}

export interface newsList_NewsList_data_author_busiRegistration {
  __typename: "File";
  name: string;
  uri: string;
  owner: string;
}

export interface newsList_NewsList_data_author_profileImg {
  __typename: "File";
  uri: string;
}

export interface newsList_NewsList_data_author_guideLicense {
  __typename: "File";
  name: string;
  uri: string;
  owner: string;
}

export interface newsList_NewsList_data_author_guideLicenses {
  __typename: "File";
  name: string;
  uri: string;
  owner: string;
}

export interface newsList_NewsList_data_author_bankImg {
  __typename: "File";
  name: string;
  uri: string;
  owner: string;
}

export interface newsList_NewsList_data_author {
  __typename: "User";
  _id: string;
  /**
   * 닉네임 유니크
   */
  nickName: string;
  createdAt: any;
  updatedAt: any;
  isDelete: boolean;
  email: string;
  /**
   * 담당자명
   */
  manageName: string;
  connectionCount: number;
  role: UserRole;
  brith_date: string;
  address: string;
  address_detail: string;
  acceptSms: boolean;
  status: UserStatus;
  acceptEamil: boolean;
  /**
   * 매니저에 의한 회원가입 거절
   */
  isDenied: boolean | null;
  is_froreginer: boolean;
  /**
   * 기업 전화번호
   */
  busi_contact: string;
  /**
   * 담당자 연락처
   */
  manageContact: string;
  resignDate: any | null;
  gender: GENDER;
  busi_num: string;
  /**
   * 회원가입 거절 사유
   */
  denyReason: string | null;
  /**
   * 부서명
   */
  busi_department: string;
  isVerifiedManager: boolean;
  isVerifiedPhoneNumber: boolean;
  /**
   * 사업자 등록증
   */
  busiRegistration: newsList_NewsList_data_author_busiRegistration | null;
  /**
   * 개인 법인인지 아닌지 체크함 True = 법인
   */
  is_priv_corper: boolean;
  /**
   * 사업자명
   */
  busi_name: string;
  busi_address: string;
  account_number: string;
  name: string;
  bank_name: string;
  resignReason: string | null;
  resignReasonType: string | null;
  isResigned: boolean | null;
  phoneNumber: string;
  /**
   * 프로필 사진
   */
  profileImg: newsList_NewsList_data_author_profileImg | null;
  /**
   * 가이드 자격증
   */
  guideLicense: newsList_NewsList_data_author_guideLicense | null;
  /**
   * 가이드 자격증들
   */
  guideLicenses: newsList_NewsList_data_author_guideLicenses[] | null;
  /**
   * 주력언어
   */
  lang: Lang;
  /**
   * 통장사본
   */
  bankImg: newsList_NewsList_data_author_bankImg | null;
}

export interface newsList_NewsList_data_attachFiles {
  __typename: "File";
  name: string;
  uri: string;
  owner: string;
}

export interface newsList_NewsList_data_thumb {
  __typename: "File";
  name: string;
  uri: string;
  owner: string;
}

export interface newsList_NewsList_data {
  __typename: "News";
  _id: string;
  createdAt: any;
  updatedAt: any;
  isDelete: boolean;
  title: string;
  contents: string;
  author: newsList_NewsList_data_author | null;
  isNotice: boolean | null;
  isOpen: boolean | null;
  summary: string | null;
  subTitle: string | null;
  keyWards: string[] | null;
  attachFiles: newsList_NewsList_data_attachFiles[] | null;
  thumb: newsList_NewsList_data_thumb | null;
  viewCount: number;
  type: NEWS_TYPE;
}

export interface newsList_NewsList {
  __typename: "NewsListResponse";
  ok: boolean;
  error: newsList_NewsList_error | null;
  page: newsList_NewsList_page;
  data: newsList_NewsList_data[];
}

export interface newsList {
  NewsList: newsList_NewsList;
}

export interface newsListVariables {
  sort?: _NewsSort[] | null;
  filter?: _NewsFilter | null;
  pageInput: pageInput;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: newsCreate
// ====================================================

export interface newsCreate_NewsCreate_error {
  __typename: "CustomError";
  location: string;
  severity: ERR_SEVERITY;
  code: ERR_CODE;
  message: string;
}

export interface newsCreate_NewsCreate_data {
  __typename: "News";
  _id: string;
}

export interface newsCreate_NewsCreate {
  __typename: "NewsCreateResponse";
  ok: boolean;
  error: newsCreate_NewsCreate_error | null;
  data: newsCreate_NewsCreate_data | null;
}

export interface newsCreate {
  NewsCreate: newsCreate_NewsCreate;
}

export interface newsCreateVariables {
  params: NewsCreateInput;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: newsDelete
// ====================================================

export interface newsDelete_NewsDelete_error {
  __typename: "CustomError";
  location: string;
  severity: ERR_SEVERITY;
  code: ERR_CODE;
  message: string;
}

export interface newsDelete_NewsDelete {
  __typename: "NewsDeleteResponseResponse";
  ok: boolean;
  error: newsDelete_NewsDelete_error | null;
}

export interface newsDelete {
  NewsDelete: newsDelete_NewsDelete;
}

export interface newsDeleteVariables {
  id: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: newsUpdate
// ====================================================

export interface newsUpdate_NewsUpdate_error {
  __typename: "CustomError";
  location: string;
  severity: ERR_SEVERITY;
  code: ERR_CODE;
  message: string;
}

export interface newsUpdate_NewsUpdate_data {
  __typename: "News";
  _id: string;
}

export interface newsUpdate_NewsUpdate {
  __typename: "NewsUpdateResponse";
  ok: boolean;
  error: newsUpdate_NewsUpdate_error | null;
  data: newsUpdate_NewsUpdate_data | null;
}

export interface newsUpdate {
  NewsUpdate: newsUpdate_NewsUpdate;
}

export interface newsUpdateVariables {
  params: NewsUpdateInput;
  id: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: notificationHistory
// ====================================================

export interface notificationHistory_NotificationHistory_error {
  __typename: "CustomError";
  location: string;
  severity: ERR_SEVERITY;
  code: ERR_CODE;
  message: string;
}

export interface notificationHistory_NotificationHistory_page {
  __typename: "Page";
  /**
   * 현재 페이지 번호
   */
  page: number;
  /**
   * 페이지당 문서 갯수
   */
  cntPerPage: number;
  /**
   * 페이지 총 갯수
   */
  totalPageSize: number;
  /**
   * 시작 페이지 번호
   */
  start_page_num: number;
  /**
   * 마지막 페이지 번호
   */
  end_page_num: number;
  /**
   * 이전(<<) 표시 여부
   */
  isPrev: boolean;
  /**
   * 다음(>>) 표시 여부
   */
  isNext: boolean;
  /**
   * 이전(<<) 클릭시 표시할 페이지 번호
   */
  prev_page_num: number;
  /**
   * 다음(>>) 클릭시 표시할 페이지 번호
   */
  next_page_num: number;
  /**
   * 총 갯수
   */
  totalCount: number;
  /**
   * 마지막 패이지의 갯수 (index계산 하는데 사용함)
   */
  remainder: number;
}

export interface notificationHistory_NotificationHistory_data {
  __typename: "SmsHistoryItem" | "EmailHistoryItem";
  _id: string;
  createdAt: any;
  updatedAt: any;
  method: NotificationMethod;
  sender: string;
  receivers: string[];
  title: string | null;
  /**
   * Template에서 변수가 치환되지 않은 채로 출력 될 수 있음.
   */
  content: string;
  count: number;
  successCount: number;
  errorCount: number;
  /**
   * 전송 후 남은 포인트
   */
  pointRemains: number;
  /**
   * 포인트 소모량
   */
  pointConsumed: number;
}

export interface notificationHistory_NotificationHistory {
  __typename: "INotificationHistoryItemListResponse";
  ok: boolean;
  error: notificationHistory_NotificationHistory_error | null;
  page: notificationHistory_NotificationHistory_page;
  data: notificationHistory_NotificationHistory_data[];
}

export interface notificationHistory {
  NotificationHistory: notificationHistory_NotificationHistory;
}

export interface notificationHistoryVariables {
  sort?: _INotificationHistoryItemSort[] | null;
  filter?: _INotificationHistoryItemFilter | null;
  pageInput: pageInput;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: notificationSenderPhoneAddStart
// ====================================================

export interface notificationSenderPhoneAddStart_NotificationSenderPhoneAddStart_error {
  __typename: "CustomError";
  location: string;
  severity: ERR_SEVERITY;
  code: ERR_CODE;
  message: string;
}

export interface notificationSenderPhoneAddStart_NotificationSenderPhoneAddStart {
  __typename: "VerificationResponse";
  ok: boolean;
  error: notificationSenderPhoneAddStart_NotificationSenderPhoneAddStart_error | null;
}

export interface notificationSenderPhoneAddStart {
  NotificationSenderPhoneAddStart: notificationSenderPhoneAddStart_NotificationSenderPhoneAddStart;
}

export interface notificationSenderPhoneAddStartVariables {
  target: VerificationTarget;
  payload: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: notificationSenderAddComplete
// ====================================================

export interface notificationSenderAddComplete_NotificationSenderAddComplete_error {
  __typename: "CustomError";
  location: string;
  severity: ERR_SEVERITY;
  code: ERR_CODE;
  message: string;
}

export interface notificationSenderAddComplete_NotificationSenderAddComplete {
  __typename: "VerificationResponse";
  ok: boolean;
  error: notificationSenderAddComplete_NotificationSenderAddComplete_error | null;
}

export interface notificationSenderAddComplete {
  NotificationSenderAddComplete: notificationSenderAddComplete_NotificationSenderAddComplete;
}

export interface notificationSenderAddCompleteVariables {
  verificationId: string;
  target: VerificationTarget;
  code: string;
  payload: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: smsTemplateUpdate
// ====================================================

export interface smsTemplateUpdate_SmsTemplateUpdate_error {
  __typename: "CustomError";
  location: string;
  severity: ERR_SEVERITY;
  code: ERR_CODE;
  message: string;
}

export interface smsTemplateUpdate_SmsTemplateUpdate {
  __typename: "SmsTemplateUpdateResponse";
  ok: boolean;
  error: smsTemplateUpdate_SmsTemplateUpdate_error | null;
}

export interface smsTemplateUpdate {
  SmsTemplateUpdate: smsTemplateUpdate_SmsTemplateUpdate;
}

export interface smsTemplateUpdateVariables {
  input: SmsTemplateUpdateInput;
  templateId: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: smstemplateCreate
// ====================================================

export interface smstemplateCreate_SmsTemplateCreate_error {
  __typename: "CustomError";
  location: string;
  severity: ERR_SEVERITY;
  code: ERR_CODE;
  message: string;
}

export interface smstemplateCreate_SmsTemplateCreate {
  __typename: "SmsTemplateCreateResponse";
  ok: boolean;
  error: smstemplateCreate_SmsTemplateCreate_error | null;
}

export interface smstemplateCreate {
  SmsTemplateCreate: smstemplateCreate_SmsTemplateCreate;
}

export interface smstemplateCreateVariables {
  input: SmsTemplateCreateInput;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: smstemplateDelete
// ====================================================

export interface smstemplateDelete_SmsTemplateDelete_error {
  __typename: "CustomError";
  location: string;
  severity: ERR_SEVERITY;
  code: ERR_CODE;
  message: string;
}

export interface smstemplateDelete_SmsTemplateDelete {
  __typename: "SmsTemplateDeleteResponse";
  ok: boolean;
  error: smstemplateDelete_SmsTemplateDelete_error | null;
}

export interface smstemplateDelete {
  SmsTemplateDelete: smstemplateDelete_SmsTemplateDelete;
}

export interface smstemplateDeleteVariables {
  templateId: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: smsSendSingle
// ====================================================

export interface smsSendSingle_SmsSendSingle_error {
  __typename: "CustomError";
  location: string;
  severity: ERR_SEVERITY;
  code: ERR_CODE;
  message: string;
}

export interface smsSendSingle_SmsSendSingle {
  __typename: "SmsSingleMessageSendResponse";
  ok: boolean;
  error: smsSendSingle_SmsSendSingle_error | null;
}

export interface smsSendSingle {
  SmsSendSingle: smsSendSingle_SmsSendSingle;
}

export interface smsSendSingleVariables {
  input: SmsSendInput;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: smsSendWithTemplate
// ====================================================

export interface smsSendWithTemplate_SmsSendWithTemplate_error {
  __typename: "CustomError";
  location: string;
  severity: ERR_SEVERITY;
  code: ERR_CODE;
  message: string;
}

export interface smsSendWithTemplate_SmsSendWithTemplate {
  __typename: "SmsTemplateMessageSendResponse";
  ok: boolean;
  error: smsSendWithTemplate_SmsSendWithTemplate_error | null;
}

export interface smsSendWithTemplate {
  SmsSendWithTemplate: smsSendWithTemplate_SmsSendWithTemplate;
}

export interface smsSendWithTemplateVariables {
  input: SmsSendWithTemplateInput;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: templateList
// ====================================================

export interface templateList_TemplateList_error {
  __typename: "CustomError";
  location: string;
  severity: ERR_SEVERITY;
  code: ERR_CODE;
  message: string;
}

export interface templateList_TemplateList_page {
  __typename: "Page";
  /**
   * 현재 페이지 번호
   */
  page: number;
  /**
   * 페이지당 문서 갯수
   */
  cntPerPage: number;
  /**
   * 페이지 총 갯수
   */
  totalPageSize: number;
  /**
   * 시작 페이지 번호
   */
  start_page_num: number;
  /**
   * 마지막 페이지 번호
   */
  end_page_num: number;
  /**
   * 이전(<<) 표시 여부
   */
  isPrev: boolean;
  /**
   * 다음(>>) 표시 여부
   */
  isNext: boolean;
  /**
   * 이전(<<) 클릭시 표시할 페이지 번호
   */
  prev_page_num: number;
  /**
   * 다음(>>) 클릭시 표시할 페이지 번호
   */
  next_page_num: number;
  /**
   * 총 갯수
   */
  totalCount: number;
  /**
   * 마지막 패이지의 갯수 (index계산 하는데 사용함)
   */
  remainder: number;
}

export interface templateList_TemplateList_data_trigger_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface templateList_TemplateList_data_trigger {
  __typename: "NotificationTrigger";
  sender: string;
  event: NotificationTriggerEvent;
  isEnabled: boolean;
  tags: templateList_TemplateList_data_trigger_tags[];
}

export interface templateList_TemplateList_data_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface templateList_TemplateList_data {
  __typename: "TemplateSms";
  _id: string;
  createdAt: any;
  name: string;
  description: string | null;
  content: string;
  /**
   * 코드겐용
   */
  _replaceEnum: ReplaceString | null;
  trigger: templateList_TemplateList_data_trigger | null;
  tags: templateList_TemplateList_data_tags[];
  replacers: string[];
}

export interface templateList_TemplateList {
  __typename: "TemplateListResponse";
  ok: boolean;
  error: templateList_TemplateList_error | null;
  page: templateList_TemplateList_page;
  data: templateList_TemplateList_data[];
}

export interface templateList {
  TemplateList: templateList_TemplateList;
}

export interface templateListVariables {
  sort?: _ITemplateSort[] | null;
  filter?: _ITemplateFilter | null;
  pageInput: pageInput;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: paymentList
// ====================================================

export interface paymentList_PaymentList_error {
  __typename: "CustomError";
  location: string;
  severity: ERR_SEVERITY;
  code: ERR_CODE;
  message: string;
}

export interface paymentList_PaymentList_page {
  __typename: "Page";
  /**
   * 현재 페이지 번호
   */
  page: number;
  /**
   * 페이지당 문서 갯수
   */
  cntPerPage: number;
  /**
   * 페이지 총 갯수
   */
  totalPageSize: number;
  /**
   * 시작 페이지 번호
   */
  start_page_num: number;
  /**
   * 마지막 페이지 번호
   */
  end_page_num: number;
  /**
   * 이전(<<) 표시 여부
   */
  isPrev: boolean;
  /**
   * 다음(>>) 표시 여부
   */
  isNext: boolean;
  /**
   * 이전(<<) 클릭시 표시할 페이지 번호
   */
  prev_page_num: number;
  /**
   * 다음(>>) 클릭시 표시할 페이지 번호
   */
  next_page_num: number;
  /**
   * 총 갯수
   */
  totalCount: number;
  /**
   * 마지막 패이지의 갯수 (index계산 하는데 사용함)
   */
  remainder: number;
}

export interface paymentList_PaymentList_data_history {
  __typename: "TxHistory";
  status: string;
  price: number;
  metadata: any | null;
  createdAt: any;
  updatedAt: any;
}

export interface paymentList_PaymentList_data {
  __typename: "Payment";
  _id: string;
  createdAt: any;
  updatedAt: any;
  isDelete: boolean;
  payMethod: PayMethod;
  status: PaymentStatus;
  price: number;
  totalCancelPrice: number;
  cancelDate: any | null;
  isPartialCancel: number;
  groupCode: string | null;
  history: paymentList_PaymentList_data_history[];
}

export interface paymentList_PaymentList {
  __typename: "PaymentListResponse";
  ok: boolean;
  error: paymentList_PaymentList_error | null;
  page: paymentList_PaymentList_page;
  data: paymentList_PaymentList_data[];
}

export interface paymentList {
  PaymentList: paymentList_PaymentList;
}

export interface paymentListVariables {
  sort?: _PaymentSort[] | null;
  filter?: _PaymentFilter | null;
  pageInput: pageInput;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: settlementCal
// ====================================================

export interface settlementCal_SettlementCal_error {
  __typename: "CustomError";
  location: string;
  severity: ERR_SEVERITY;
  code: ERR_CODE;
  message: string;
}

export interface settlementCal_SettlementCal {
  __typename: "SettlementCalResponse";
  ok: boolean;
  error: settlementCal_SettlementCal_error | null;
  amt: number;
}

export interface settlementCal {
  /**
   * 판매자가 얼마 받을 수 있는지 계산함
   */
  SettlementCal: settlementCal_SettlementCal;
}

export interface settlementCalVariables {
  filter: _PaymentFilter;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: bankDepositConfirm
// ====================================================

export interface bankDepositConfirm_BankDepositConfirm_error {
  __typename: "CustomError";
  location: string;
  severity: ERR_SEVERITY;
  code: ERR_CODE;
  message: string;
}

export interface bankDepositConfirm_BankDepositConfirm_data_history {
  __typename: "TxHistory";
  status: string;
  price: number;
  metadata: any | null;
  createdAt: any;
  updatedAt: any;
}

export interface bankDepositConfirm_BankDepositConfirm_data {
  __typename: "Payment";
  _id: string;
  createdAt: any;
  updatedAt: any;
  isDelete: boolean;
  payMethod: PayMethod;
  status: PaymentStatus;
  price: number;
  totalCancelPrice: number;
  cancelDate: any | null;
  isPartialCancel: number;
  groupCode: string | null;
  history: bankDepositConfirm_BankDepositConfirm_data_history[];
}

export interface bankDepositConfirm_BankDepositConfirm {
  __typename: "BankDepositConfirmResponse";
  ok: boolean;
  error: bankDepositConfirm_BankDepositConfirm_error | null;
  data: bankDepositConfirm_BankDepositConfirm_data[] | null;
}

export interface bankDepositConfirm {
  BankDepositConfirm: bankDepositConfirm_BankDepositConfirm;
}

export interface bankDepositConfirmVariables {
  paymentIds: string[];
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: bankRefund
// ====================================================

export interface bankRefund_BankRefund_error {
  __typename: "CustomError";
  location: string;
  severity: ERR_SEVERITY;
  code: ERR_CODE;
  message: string;
}

export interface bankRefund_BankRefund {
  __typename: "BankRefundResponse";
  ok: boolean;
  error: bankRefund_BankRefund_error | null;
}

export interface bankRefund {
  BankRefund: bankRefund_BankRefund;
}

export interface bankRefundVariables {
  params: BankRefundInput[];
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: portfolioFindById
// ====================================================

export interface portfolioFindById_PortfolioFindById_error {
  __typename: "CustomError";
  location: string;
  severity: ERR_SEVERITY;
  code: ERR_CODE;
  message: string;
}

export interface portfolioFindById_PortfolioFindById_data_author_busiRegistration {
  __typename: "File";
  name: string;
  uri: string;
  owner: string;
}

export interface portfolioFindById_PortfolioFindById_data_author_profileImg {
  __typename: "File";
  uri: string;
}

export interface portfolioFindById_PortfolioFindById_data_author_guideLicense {
  __typename: "File";
  name: string;
  uri: string;
  owner: string;
}

export interface portfolioFindById_PortfolioFindById_data_author_guideLicenses {
  __typename: "File";
  name: string;
  uri: string;
  owner: string;
}

export interface portfolioFindById_PortfolioFindById_data_author_bankImg {
  __typename: "File";
  name: string;
  uri: string;
  owner: string;
}

export interface portfolioFindById_PortfolioFindById_data_author {
  __typename: "User";
  _id: string;
  /**
   * 닉네임 유니크
   */
  nickName: string;
  createdAt: any;
  updatedAt: any;
  isDelete: boolean;
  email: string;
  /**
   * 담당자명
   */
  manageName: string;
  connectionCount: number;
  role: UserRole;
  brith_date: string;
  address: string;
  address_detail: string;
  acceptSms: boolean;
  status: UserStatus;
  acceptEamil: boolean;
  /**
   * 매니저에 의한 회원가입 거절
   */
  isDenied: boolean | null;
  is_froreginer: boolean;
  /**
   * 기업 전화번호
   */
  busi_contact: string;
  /**
   * 담당자 연락처
   */
  manageContact: string;
  resignDate: any | null;
  gender: GENDER;
  busi_num: string;
  /**
   * 회원가입 거절 사유
   */
  denyReason: string | null;
  /**
   * 부서명
   */
  busi_department: string;
  isVerifiedManager: boolean;
  isVerifiedPhoneNumber: boolean;
  /**
   * 사업자 등록증
   */
  busiRegistration: portfolioFindById_PortfolioFindById_data_author_busiRegistration | null;
  /**
   * 개인 법인인지 아닌지 체크함 True = 법인
   */
  is_priv_corper: boolean;
  /**
   * 사업자명
   */
  busi_name: string;
  busi_address: string;
  account_number: string;
  name: string;
  bank_name: string;
  resignReason: string | null;
  resignReasonType: string | null;
  isResigned: boolean | null;
  phoneNumber: string;
  /**
   * 프로필 사진
   */
  profileImg: portfolioFindById_PortfolioFindById_data_author_profileImg | null;
  /**
   * 가이드 자격증
   */
  guideLicense: portfolioFindById_PortfolioFindById_data_author_guideLicense | null;
  /**
   * 가이드 자격증들
   */
  guideLicenses: portfolioFindById_PortfolioFindById_data_author_guideLicenses[] | null;
  /**
   * 주력언어
   */
  lang: Lang;
  /**
   * 통장사본
   */
  bankImg: portfolioFindById_PortfolioFindById_data_author_bankImg | null;
}

export interface portfolioFindById_PortfolioFindById_data_thumb {
  __typename: "File";
  name: string;
  uri: string;
  owner: string;
}

export interface portfolioFindById_PortfolioFindById_data_category {
  __typename: "Category";
  _id: string;
  label: string;
}

export interface portfolioFindById_PortfolioFindById_data {
  __typename: "Portfolio";
  _id: string;
  createdAt: any;
  updatedAt: any;
  isDelete: boolean;
  title: string;
  isOpen: boolean | null;
  keyWards: string[] | null;
  summary: string | null;
  subTitle: string | null;
  contents: string;
  author: portfolioFindById_PortfolioFindById_data_author | null;
  thumb: portfolioFindById_PortfolioFindById_data_thumb | null;
  category: portfolioFindById_PortfolioFindById_data_category | null;
}

export interface portfolioFindById_PortfolioFindById {
  __typename: "PortfolioFindByIdResponse";
  ok: boolean;
  error: portfolioFindById_PortfolioFindById_error | null;
  data: portfolioFindById_PortfolioFindById_data | null;
}

export interface portfolioFindById {
  PortfolioFindById: portfolioFindById_PortfolioFindById;
}

export interface portfolioFindByIdVariables {
  id: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: portfolioList
// ====================================================

export interface portfolioList_PortfolioList_error {
  __typename: "CustomError";
  location: string;
  severity: ERR_SEVERITY;
  code: ERR_CODE;
  message: string;
}

export interface portfolioList_PortfolioList_page {
  __typename: "Page";
  /**
   * 현재 페이지 번호
   */
  page: number;
  /**
   * 페이지당 문서 갯수
   */
  cntPerPage: number;
  /**
   * 페이지 총 갯수
   */
  totalPageSize: number;
  /**
   * 시작 페이지 번호
   */
  start_page_num: number;
  /**
   * 마지막 페이지 번호
   */
  end_page_num: number;
  /**
   * 이전(<<) 표시 여부
   */
  isPrev: boolean;
  /**
   * 다음(>>) 표시 여부
   */
  isNext: boolean;
  /**
   * 이전(<<) 클릭시 표시할 페이지 번호
   */
  prev_page_num: number;
  /**
   * 다음(>>) 클릭시 표시할 페이지 번호
   */
  next_page_num: number;
  /**
   * 총 갯수
   */
  totalCount: number;
  /**
   * 마지막 패이지의 갯수 (index계산 하는데 사용함)
   */
  remainder: number;
}

export interface portfolioList_PortfolioList_data_author_busiRegistration {
  __typename: "File";
  name: string;
  uri: string;
  owner: string;
}

export interface portfolioList_PortfolioList_data_author_profileImg {
  __typename: "File";
  uri: string;
}

export interface portfolioList_PortfolioList_data_author_guideLicense {
  __typename: "File";
  name: string;
  uri: string;
  owner: string;
}

export interface portfolioList_PortfolioList_data_author_guideLicenses {
  __typename: "File";
  name: string;
  uri: string;
  owner: string;
}

export interface portfolioList_PortfolioList_data_author_bankImg {
  __typename: "File";
  name: string;
  uri: string;
  owner: string;
}

export interface portfolioList_PortfolioList_data_author {
  __typename: "User";
  _id: string;
  /**
   * 닉네임 유니크
   */
  nickName: string;
  createdAt: any;
  updatedAt: any;
  isDelete: boolean;
  email: string;
  /**
   * 담당자명
   */
  manageName: string;
  connectionCount: number;
  role: UserRole;
  brith_date: string;
  address: string;
  address_detail: string;
  acceptSms: boolean;
  status: UserStatus;
  acceptEamil: boolean;
  /**
   * 매니저에 의한 회원가입 거절
   */
  isDenied: boolean | null;
  is_froreginer: boolean;
  /**
   * 기업 전화번호
   */
  busi_contact: string;
  /**
   * 담당자 연락처
   */
  manageContact: string;
  resignDate: any | null;
  gender: GENDER;
  busi_num: string;
  /**
   * 회원가입 거절 사유
   */
  denyReason: string | null;
  /**
   * 부서명
   */
  busi_department: string;
  isVerifiedManager: boolean;
  isVerifiedPhoneNumber: boolean;
  /**
   * 사업자 등록증
   */
  busiRegistration: portfolioList_PortfolioList_data_author_busiRegistration | null;
  /**
   * 개인 법인인지 아닌지 체크함 True = 법인
   */
  is_priv_corper: boolean;
  /**
   * 사업자명
   */
  busi_name: string;
  busi_address: string;
  account_number: string;
  name: string;
  bank_name: string;
  resignReason: string | null;
  resignReasonType: string | null;
  isResigned: boolean | null;
  phoneNumber: string;
  /**
   * 프로필 사진
   */
  profileImg: portfolioList_PortfolioList_data_author_profileImg | null;
  /**
   * 가이드 자격증
   */
  guideLicense: portfolioList_PortfolioList_data_author_guideLicense | null;
  /**
   * 가이드 자격증들
   */
  guideLicenses: portfolioList_PortfolioList_data_author_guideLicenses[] | null;
  /**
   * 주력언어
   */
  lang: Lang;
  /**
   * 통장사본
   */
  bankImg: portfolioList_PortfolioList_data_author_bankImg | null;
}

export interface portfolioList_PortfolioList_data_thumb {
  __typename: "File";
  name: string;
  uri: string;
  owner: string;
}

export interface portfolioList_PortfolioList_data_category {
  __typename: "Category";
  _id: string;
  label: string;
}

export interface portfolioList_PortfolioList_data {
  __typename: "Portfolio";
  _id: string;
  createdAt: any;
  updatedAt: any;
  isDelete: boolean;
  title: string;
  isOpen: boolean | null;
  keyWards: string[] | null;
  summary: string | null;
  subTitle: string | null;
  contents: string;
  author: portfolioList_PortfolioList_data_author | null;
  thumb: portfolioList_PortfolioList_data_thumb | null;
  category: portfolioList_PortfolioList_data_category | null;
}

export interface portfolioList_PortfolioList {
  __typename: "PortfolioListResponse";
  ok: boolean;
  error: portfolioList_PortfolioList_error | null;
  page: portfolioList_PortfolioList_page;
  data: portfolioList_PortfolioList_data[];
}

export interface portfolioList {
  PortfolioList: portfolioList_PortfolioList;
}

export interface portfolioListVariables {
  sort?: _PortfolioSort[] | null;
  filter?: _PortfolioFilter | null;
  pageInput: pageInput;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: portfolioCreate
// ====================================================

export interface portfolioCreate_PortfolioCreate_error {
  __typename: "CustomError";
  location: string;
  severity: ERR_SEVERITY;
  code: ERR_CODE;
  message: string;
}

export interface portfolioCreate_PortfolioCreate_data {
  __typename: "Portfolio";
  _id: string;
}

export interface portfolioCreate_PortfolioCreate {
  __typename: "PortfolioCreateResponse";
  ok: boolean;
  error: portfolioCreate_PortfolioCreate_error | null;
  data: portfolioCreate_PortfolioCreate_data | null;
}

export interface portfolioCreate {
  PortfolioCreate: portfolioCreate_PortfolioCreate;
}

export interface portfolioCreateVariables {
  params: PortfolioCreateInput;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: portfolioDelete
// ====================================================

export interface portfolioDelete_PortfolioDelete_error {
  __typename: "CustomError";
  location: string;
  severity: ERR_SEVERITY;
  code: ERR_CODE;
  message: string;
}

export interface portfolioDelete_PortfolioDelete {
  __typename: "PortfolioDeleteResponse";
  ok: boolean;
  error: portfolioDelete_PortfolioDelete_error | null;
}

export interface portfolioDelete {
  PortfolioDelete: portfolioDelete_PortfolioDelete;
}

export interface portfolioDeleteVariables {
  id: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: portfolioUpdate
// ====================================================

export interface portfolioUpdate_PortfolioUpdate_error {
  __typename: "CustomError";
  location: string;
  severity: ERR_SEVERITY;
  code: ERR_CODE;
  message: string;
}

export interface portfolioUpdate_PortfolioUpdate_data {
  __typename: "Portfolio";
  _id: string;
}

export interface portfolioUpdate_PortfolioUpdate {
  __typename: "PortfolioUpdateResponse";
  ok: boolean;
  error: portfolioUpdate_PortfolioUpdate_error | null;
  data: portfolioUpdate_PortfolioUpdate_data | null;
}

export interface portfolioUpdate {
  PortfolioUpdate: portfolioUpdate_PortfolioUpdate;
}

export interface portfolioUpdateVariables {
  params: PortfolioUpdateInput;
  id: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: productCreate
// ====================================================

export interface productCreate_ProductCreate_error {
  __typename: "CustomError";
  location: string;
  severity: ERR_SEVERITY;
  code: ERR_CODE;
  message: string;
}

export interface productCreate_ProductCreate_data {
  __typename: "Product";
  _id: string;
}

export interface productCreate_ProductCreate {
  __typename: "ProductCreateResponse";
  ok: boolean;
  error: productCreate_ProductCreate_error | null;
  data: productCreate_ProductCreate_data | null;
}

export interface productCreate {
  ProductCreate: productCreate_ProductCreate;
}

export interface productCreateVariables {
  params: ProductCreateInput;
  groupCode?: string | null;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: productCreateAccept
// ====================================================

export interface productCreateAccept_ProductCreateAccept_error {
  __typename: "CustomError";
  location: string;
  severity: ERR_SEVERITY;
  code: ERR_CODE;
  message: string;
}

export interface productCreateAccept_ProductCreateAccept_data {
  __typename: "Product";
  _id: string;
}

export interface productCreateAccept_ProductCreateAccept {
  __typename: "ProductCreateAcceptResponse";
  ok: boolean;
  error: productCreateAccept_ProductCreateAccept_error | null;
  data: productCreateAccept_ProductCreateAccept_data | null;
}

export interface productCreateAccept {
  ProductCreateAccept: productCreateAccept_ProductCreateAccept;
}

export interface productCreateAcceptVariables {
  ProductId: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: productUpdateAccept
// ====================================================

export interface productUpdateAccept_ProductUpdateAccept_error {
  __typename: "CustomError";
  location: string;
  severity: ERR_SEVERITY;
  code: ERR_CODE;
  message: string;
}

export interface productUpdateAccept_ProductUpdateAccept_data {
  __typename: "Product";
  _id: string;
}

export interface productUpdateAccept_ProductUpdateAccept {
  __typename: "ProductUpdateAcceptResponse";
  ok: boolean;
  error: productUpdateAccept_ProductUpdateAccept_error | null;
  data: productUpdateAccept_ProductUpdateAccept_data | null;
}

export interface productUpdateAccept {
  ProductUpdateAccept: productUpdateAccept_ProductUpdateAccept;
}

export interface productUpdateAcceptVariables {
  ProductId: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: productCreateReject
// ====================================================

export interface productCreateReject_ProductCreateReject_error {
  __typename: "CustomError";
  location: string;
  severity: ERR_SEVERITY;
  code: ERR_CODE;
  message: string;
}

export interface productCreateReject_ProductCreateReject_data {
  __typename: "Product";
  _id: string;
}

export interface productCreateReject_ProductCreateReject {
  __typename: "ProductCreateRejectResponse";
  ok: boolean;
  error: productCreateReject_ProductCreateReject_error | null;
  data: productCreateReject_ProductCreateReject_data | null;
}

export interface productCreateReject {
  ProductCreateReject: productCreateReject_ProductCreateReject;
}

export interface productCreateRejectVariables {
  ProductId: string;
  reason: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: productUpdateReject
// ====================================================

export interface productUpdateReject_ProductUpdateReject_error {
  __typename: "CustomError";
  location: string;
  severity: ERR_SEVERITY;
  code: ERR_CODE;
  message: string;
}

export interface productUpdateReject_ProductUpdateReject_data {
  __typename: "Product";
  _id: string;
}

export interface productUpdateReject_ProductUpdateReject {
  __typename: "ProductUpdateRejectResponse";
  ok: boolean;
  error: productUpdateReject_ProductUpdateReject_error | null;
  data: productUpdateReject_ProductUpdateReject_data | null;
}

export interface productUpdateReject {
  ProductUpdateReject: productUpdateReject_ProductUpdateReject;
}

export interface productUpdateRejectVariables {
  ProductId: string;
  reason: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: productUpdate
// ====================================================

export interface productUpdate_ProductUpdate_error {
  __typename: "CustomError";
  location: string;
  severity: ERR_SEVERITY;
  code: ERR_CODE;
  message: string;
}

export interface productUpdate_ProductUpdate_data {
  __typename: "Product";
  _id: string;
}

export interface productUpdate_ProductUpdate {
  __typename: "ProductUpdateResponse";
  ok: boolean;
  error: productUpdate_ProductUpdate_error | null;
  data: productUpdate_ProductUpdate_data | null;
}

export interface productUpdate {
  ProductUpdate: productUpdate_ProductUpdate;
}

export interface productUpdateVariables {
  params: ProductUpdateInput;
  _id: string;
  reason: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: productUpdateReq
// ====================================================

export interface productUpdateReq_ProductUpdateReq_error {
  __typename: "CustomError";
  location: string;
  severity: ERR_SEVERITY;
  code: ERR_CODE;
  message: string;
}

export interface productUpdateReq_ProductUpdateReq_data {
  __typename: "Product";
  _id: string;
}

export interface productUpdateReq_ProductUpdateReq {
  __typename: "ProductUpdateReqResponse";
  ok: boolean;
  error: productUpdateReq_ProductUpdateReq_error | null;
  data: productUpdateReq_ProductUpdateReq_data | null;
}

export interface productUpdateReq {
  ProductUpdateReq: productUpdateReq_ProductUpdateReq;
}

export interface productUpdateReqVariables {
  params: ProductUpdateReqInput;
  _id: string;
  reason: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: productDelete
// ====================================================

export interface productDelete_ProductDelete_error {
  __typename: "CustomError";
  location: string;
  severity: ERR_SEVERITY;
  code: ERR_CODE;
  message: string;
}

export interface productDelete_ProductDelete_data_region {
  __typename: "Category";
  label: string;
  _id: string;
}

export interface productDelete_ProductDelete_data_category {
  __typename: "Category";
  _id: string;
  label: string;
}

export interface productDelete_ProductDelete_data_bookerSummary {
  __typename: "BookerSummary";
  adultCount: number;
  babyCount: number;
  kidsCount: number;
  completeBookCount: number;
  readyBookCount: number;
  cancelBookCount: number;
}

export interface productDelete_ProductDelete_data_itinerary_images {
  __typename: "File";
  name: string;
  uri: string;
  owner: string;
}

export interface productDelete_ProductDelete_data_itinerary {
  __typename: "Itinerary";
  _id: string;
  createdAt: any;
  updatedAt: any;
  isDelete: boolean;
  title: string;
  contents: string[];
  images: productDelete_ProductDelete_data_itinerary_images[];
  date: any;
}

export interface productDelete_ProductDelete_data_images {
  __typename: "File";
  name: string;
  uri: string;
  owner: string;
}

export interface productDelete_ProductDelete_data_thumb {
  __typename: "File";
  uri: string;
}

export interface productDelete_ProductDelete_data {
  __typename: "Product";
  _id: string;
  createdAt: any;
  updatedAt: any;
  regionLabel: string | null;
  isDelete: boolean;
  title: string;
  code: string;
  lang: Lang;
  /**
   * 취소를 제외한 상품 하나에 대한 모든 인원
   */
  peopleCount: number;
  contents: string;
  determined: boolean;
  endDate: any;
  dateRange: number;
  adminMemo: string;
  groupCode: string;
  region: productDelete_ProductDelete_data_region | null;
  category: productDelete_ProductDelete_data_category | null;
  /**
   * 예약인원에 대한 요약
   */
  bookerSummary: productDelete_ProductDelete_data_bookerSummary;
  status: ProductStatus;
  itinerary: productDelete_ProductDelete_data_itinerary[];
  inOrNor: string;
  info: string;
  caution: string | null;
  images: productDelete_ProductDelete_data_images[] | null;
  keyWards: string[] | null;
  address: string;
  thumb: productDelete_ProductDelete_data_thumb | null;
  startPoint: string;
  maxMember: number;
  minMember: number;
  /**
   * 유저가 업데이트 요청을 했을때 어떤 변경이였는지 메모
   */
  requestMemo: string;
  subTitle: string | null;
  adult_price: number;
  bookingCount: number;
  kids_price: number;
  /**
   * 상품 하나에 대한 결제완료된 예약 총 인원
   */
  compeltePeopleCnt: number;
  baby_price: number;
  isNotice: boolean | null;
  elseReq: ProductReOpenReq | null;
  isOpen: boolean | null;
  type: ProductType;
  startDate: any;
  Dday: number;
}

export interface productDelete_ProductDelete {
  __typename: "ProductDeleteResponse";
  ok: boolean;
  error: productDelete_ProductDelete_error | null;
  data: productDelete_ProductDelete_data | null;
}

export interface productDelete {
  ProductDelete: productDelete_ProductDelete;
}

export interface productDeleteVariables {
  id: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: productList
// ====================================================

export interface productList_ProductList_error {
  __typename: "CustomError";
  location: string;
  severity: ERR_SEVERITY;
  code: ERR_CODE;
  message: string;
}

export interface productList_ProductList_page {
  __typename: "Page";
  /**
   * 현재 페이지 번호
   */
  page: number;
  /**
   * 페이지당 문서 갯수
   */
  cntPerPage: number;
  /**
   * 페이지 총 갯수
   */
  totalPageSize: number;
  /**
   * 시작 페이지 번호
   */
  start_page_num: number;
  /**
   * 마지막 페이지 번호
   */
  end_page_num: number;
  /**
   * 이전(<<) 표시 여부
   */
  isPrev: boolean;
  /**
   * 다음(>>) 표시 여부
   */
  isNext: boolean;
  /**
   * 이전(<<) 클릭시 표시할 페이지 번호
   */
  prev_page_num: number;
  /**
   * 다음(>>) 클릭시 표시할 페이지 번호
   */
  next_page_num: number;
  /**
   * 총 갯수
   */
  totalCount: number;
  /**
   * 마지막 패이지의 갯수 (index계산 하는데 사용함)
   */
  remainder: number;
}

export interface productList_ProductList_data_region {
  __typename: "Category";
  label: string;
  _id: string;
}

export interface productList_ProductList_data_category {
  __typename: "Category";
  _id: string;
  label: string;
}

export interface productList_ProductList_data_bookerSummary {
  __typename: "BookerSummary";
  adultCount: number;
  babyCount: number;
  kidsCount: number;
  completeBookCount: number;
  readyBookCount: number;
  cancelBookCount: number;
}

export interface productList_ProductList_data_itinerary_images {
  __typename: "File";
  name: string;
  uri: string;
  owner: string;
}

export interface productList_ProductList_data_itinerary {
  __typename: "Itinerary";
  _id: string;
  createdAt: any;
  updatedAt: any;
  isDelete: boolean;
  title: string;
  contents: string[];
  images: productList_ProductList_data_itinerary_images[];
  date: any;
}

export interface productList_ProductList_data_images {
  __typename: "File";
  name: string;
  uri: string;
  owner: string;
}

export interface productList_ProductList_data_thumb {
  __typename: "File";
  uri: string;
}

export interface productList_ProductList_data_bookings {
  __typename: "Booking";
  _id: string;
  status: BookingStatus | null;
}

export interface productList_ProductList_data_author_busiRegistration {
  __typename: "File";
  name: string;
  uri: string;
  owner: string;
}

export interface productList_ProductList_data_author_profileImg {
  __typename: "File";
  uri: string;
}

export interface productList_ProductList_data_author_guideLicense {
  __typename: "File";
  name: string;
  uri: string;
  owner: string;
}

export interface productList_ProductList_data_author_guideLicenses {
  __typename: "File";
  name: string;
  uri: string;
  owner: string;
}

export interface productList_ProductList_data_author_bankImg {
  __typename: "File";
  name: string;
  uri: string;
  owner: string;
}

export interface productList_ProductList_data_author {
  __typename: "User";
  _id: string;
  /**
   * 닉네임 유니크
   */
  nickName: string;
  createdAt: any;
  updatedAt: any;
  isDelete: boolean;
  email: string;
  /**
   * 담당자명
   */
  manageName: string;
  connectionCount: number;
  role: UserRole;
  brith_date: string;
  address: string;
  address_detail: string;
  acceptSms: boolean;
  status: UserStatus;
  acceptEamil: boolean;
  /**
   * 매니저에 의한 회원가입 거절
   */
  isDenied: boolean | null;
  is_froreginer: boolean;
  /**
   * 기업 전화번호
   */
  busi_contact: string;
  /**
   * 담당자 연락처
   */
  manageContact: string;
  resignDate: any | null;
  gender: GENDER;
  busi_num: string;
  /**
   * 회원가입 거절 사유
   */
  denyReason: string | null;
  /**
   * 부서명
   */
  busi_department: string;
  isVerifiedManager: boolean;
  isVerifiedPhoneNumber: boolean;
  /**
   * 사업자 등록증
   */
  busiRegistration: productList_ProductList_data_author_busiRegistration | null;
  /**
   * 개인 법인인지 아닌지 체크함 True = 법인
   */
  is_priv_corper: boolean;
  /**
   * 사업자명
   */
  busi_name: string;
  busi_address: string;
  account_number: string;
  name: string;
  bank_name: string;
  resignReason: string | null;
  resignReasonType: string | null;
  isResigned: boolean | null;
  phoneNumber: string;
  /**
   * 프로필 사진
   */
  profileImg: productList_ProductList_data_author_profileImg | null;
  /**
   * 가이드 자격증
   */
  guideLicense: productList_ProductList_data_author_guideLicense | null;
  /**
   * 가이드 자격증들
   */
  guideLicenses: productList_ProductList_data_author_guideLicenses[] | null;
  /**
   * 주력언어
   */
  lang: Lang;
  /**
   * 통장사본
   */
  bankImg: productList_ProductList_data_author_bankImg | null;
}

export interface productList_ProductList_data {
  __typename: "Product";
  _id: string;
  createdAt: any;
  updatedAt: any;
  regionLabel: string | null;
  isDelete: boolean;
  title: string;
  code: string;
  lang: Lang;
  /**
   * 취소를 제외한 상품 하나에 대한 모든 인원
   */
  peopleCount: number;
  contents: string;
  determined: boolean;
  endDate: any;
  dateRange: number;
  adminMemo: string;
  groupCode: string;
  region: productList_ProductList_data_region | null;
  category: productList_ProductList_data_category | null;
  /**
   * 예약인원에 대한 요약
   */
  bookerSummary: productList_ProductList_data_bookerSummary;
  status: ProductStatus;
  itinerary: productList_ProductList_data_itinerary[];
  inOrNor: string;
  info: string;
  caution: string | null;
  images: productList_ProductList_data_images[] | null;
  keyWards: string[] | null;
  address: string;
  thumb: productList_ProductList_data_thumb | null;
  startPoint: string;
  maxMember: number;
  minMember: number;
  /**
   * 유저가 업데이트 요청을 했을때 어떤 변경이였는지 메모
   */
  requestMemo: string;
  subTitle: string | null;
  adult_price: number;
  bookingCount: number;
  kids_price: number;
  /**
   * 상품 하나에 대한 결제완료된 예약 총 인원
   */
  compeltePeopleCnt: number;
  baby_price: number;
  isNotice: boolean | null;
  elseReq: ProductReOpenReq | null;
  isOpen: boolean | null;
  type: ProductType;
  startDate: any;
  Dday: number;
  bookings: productList_ProductList_data_bookings[];
  author: productList_ProductList_data_author | null;
}

export interface productList_ProductList {
  __typename: "ProductListResponse";
  ok: boolean;
  error: productList_ProductList_error | null;
  page: productList_ProductList_page;
  data: productList_ProductList_data[];
}

export interface productList {
  ProductList: productList_ProductList;
}

export interface productListVariables {
  sort?: _ProductSort[] | null;
  filter?: _ProductFilter | null;
  pageInput: pageInput;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: productFindById
// ====================================================

export interface productFindById_ProductFindById_error {
  __typename: "CustomError";
  location: string;
  severity: ERR_SEVERITY;
  code: ERR_CODE;
  message: string;
}

export interface productFindById_ProductFindById_data_region {
  __typename: "Category";
  label: string;
  _id: string;
}

export interface productFindById_ProductFindById_data_category_localeLabel {
  __typename: "Locale";
  ko: string;
  en: string;
  ja: string;
  chi: string;
}

export interface productFindById_ProductFindById_data_category {
  __typename: "Category";
  _id: string;
  label: string;
  createdAt: any;
  updatedAt: any;
  isDelete: boolean;
  localeLabel: productFindById_ProductFindById_data_category_localeLabel | null;
  type: CategoryType;
}

export interface productFindById_ProductFindById_data_bookerSummary {
  __typename: "BookerSummary";
  adultCount: number;
  babyCount: number;
  kidsCount: number;
  completeBookCount: number;
  readyBookCount: number;
  cancelBookCount: number;
}

export interface productFindById_ProductFindById_data_itinerary_images {
  __typename: "File";
  name: string;
  uri: string;
  owner: string;
}

export interface productFindById_ProductFindById_data_itinerary {
  __typename: "Itinerary";
  _id: string;
  createdAt: any;
  updatedAt: any;
  isDelete: boolean;
  title: string;
  contents: string[];
  images: productFindById_ProductFindById_data_itinerary_images[];
  date: any;
}

export interface productFindById_ProductFindById_data_images {
  __typename: "File";
  name: string;
  uri: string;
  owner: string;
}

export interface productFindById_ProductFindById_data_thumb {
  __typename: "File";
  uri: string;
}

export interface productFindById_ProductFindById_data_productReview_author_busiRegistration {
  __typename: "File";
  name: string;
  uri: string;
  owner: string;
}

export interface productFindById_ProductFindById_data_productReview_author_profileImg {
  __typename: "File";
  uri: string;
}

export interface productFindById_ProductFindById_data_productReview_author_guideLicense {
  __typename: "File";
  name: string;
  uri: string;
  owner: string;
}

export interface productFindById_ProductFindById_data_productReview_author_guideLicenses {
  __typename: "File";
  name: string;
  uri: string;
  owner: string;
}

export interface productFindById_ProductFindById_data_productReview_author_bankImg {
  __typename: "File";
  name: string;
  uri: string;
  owner: string;
}

export interface productFindById_ProductFindById_data_productReview_author {
  __typename: "User";
  _id: string;
  /**
   * 닉네임 유니크
   */
  nickName: string;
  createdAt: any;
  updatedAt: any;
  isDelete: boolean;
  email: string;
  /**
   * 담당자명
   */
  manageName: string;
  connectionCount: number;
  role: UserRole;
  brith_date: string;
  address: string;
  address_detail: string;
  acceptSms: boolean;
  status: UserStatus;
  acceptEamil: boolean;
  /**
   * 매니저에 의한 회원가입 거절
   */
  isDenied: boolean | null;
  is_froreginer: boolean;
  /**
   * 기업 전화번호
   */
  busi_contact: string;
  /**
   * 담당자 연락처
   */
  manageContact: string;
  resignDate: any | null;
  gender: GENDER;
  busi_num: string;
  /**
   * 회원가입 거절 사유
   */
  denyReason: string | null;
  /**
   * 부서명
   */
  busi_department: string;
  isVerifiedManager: boolean;
  isVerifiedPhoneNumber: boolean;
  /**
   * 사업자 등록증
   */
  busiRegistration: productFindById_ProductFindById_data_productReview_author_busiRegistration | null;
  /**
   * 개인 법인인지 아닌지 체크함 True = 법인
   */
  is_priv_corper: boolean;
  /**
   * 사업자명
   */
  busi_name: string;
  busi_address: string;
  account_number: string;
  name: string;
  bank_name: string;
  resignReason: string | null;
  resignReasonType: string | null;
  isResigned: boolean | null;
  phoneNumber: string;
  /**
   * 프로필 사진
   */
  profileImg: productFindById_ProductFindById_data_productReview_author_profileImg | null;
  /**
   * 가이드 자격증
   */
  guideLicense: productFindById_ProductFindById_data_productReview_author_guideLicense | null;
  /**
   * 가이드 자격증들
   */
  guideLicenses: productFindById_ProductFindById_data_productReview_author_guideLicenses[] | null;
  /**
   * 주력언어
   */
  lang: Lang;
  /**
   * 통장사본
   */
  bankImg: productFindById_ProductFindById_data_productReview_author_bankImg | null;
}

export interface productFindById_ProductFindById_data_productReview_attachFiles {
  __typename: "File";
  name: string;
  uri: string;
  owner: string;
}

export interface productFindById_ProductFindById_data_productReview {
  __typename: "ProductReview";
  _id: string;
  createdAt: any;
  updatedAt: any;
  isDelete: boolean;
  title: string;
  contents: string;
  author: productFindById_ProductFindById_data_productReview_author | null;
  num: number;
  boardTypeName: string | null;
  isNotice: boolean | null;
  isOpen: boolean | null;
  summary: string | null;
  subTitle: string | null;
  keyWards: string[] | null;
  viewCount: number;
  likeCount: number;
  slug: string;
  authorName: string;
  productName: string;
  attachFiles: productFindById_ProductFindById_data_productReview_attachFiles[] | null;
  productAuthorName: string;
  productAuthorId: string;
  productCode: string;
  groupCode: string;
  rating: number;
}

export interface productFindById_ProductFindById_data_author_busiRegistration {
  __typename: "File";
  name: string;
  uri: string;
  owner: string;
}

export interface productFindById_ProductFindById_data_author_profileImg {
  __typename: "File";
  uri: string;
}

export interface productFindById_ProductFindById_data_author_guideLicense {
  __typename: "File";
  name: string;
  uri: string;
  owner: string;
}

export interface productFindById_ProductFindById_data_author_guideLicenses {
  __typename: "File";
  name: string;
  uri: string;
  owner: string;
}

export interface productFindById_ProductFindById_data_author_bankImg {
  __typename: "File";
  name: string;
  uri: string;
  owner: string;
}

export interface productFindById_ProductFindById_data_author {
  __typename: "User";
  _id: string;
  /**
   * 닉네임 유니크
   */
  nickName: string;
  createdAt: any;
  updatedAt: any;
  isDelete: boolean;
  email: string;
  /**
   * 담당자명
   */
  manageName: string;
  connectionCount: number;
  role: UserRole;
  brith_date: string;
  address: string;
  address_detail: string;
  acceptSms: boolean;
  status: UserStatus;
  acceptEamil: boolean;
  /**
   * 매니저에 의한 회원가입 거절
   */
  isDenied: boolean | null;
  is_froreginer: boolean;
  /**
   * 기업 전화번호
   */
  busi_contact: string;
  /**
   * 담당자 연락처
   */
  manageContact: string;
  resignDate: any | null;
  gender: GENDER;
  busi_num: string;
  /**
   * 회원가입 거절 사유
   */
  denyReason: string | null;
  /**
   * 부서명
   */
  busi_department: string;
  isVerifiedManager: boolean;
  isVerifiedPhoneNumber: boolean;
  /**
   * 사업자 등록증
   */
  busiRegistration: productFindById_ProductFindById_data_author_busiRegistration | null;
  /**
   * 개인 법인인지 아닌지 체크함 True = 법인
   */
  is_priv_corper: boolean;
  /**
   * 사업자명
   */
  busi_name: string;
  busi_address: string;
  account_number: string;
  name: string;
  bank_name: string;
  resignReason: string | null;
  resignReasonType: string | null;
  isResigned: boolean | null;
  phoneNumber: string;
  /**
   * 프로필 사진
   */
  profileImg: productFindById_ProductFindById_data_author_profileImg | null;
  /**
   * 가이드 자격증
   */
  guideLicense: productFindById_ProductFindById_data_author_guideLicense | null;
  /**
   * 가이드 자격증들
   */
  guideLicenses: productFindById_ProductFindById_data_author_guideLicenses[] | null;
  /**
   * 주력언어
   */
  lang: Lang;
  /**
   * 통장사본
   */
  bankImg: productFindById_ProductFindById_data_author_bankImg | null;
  description: any | null;
}

export interface productFindById_ProductFindById_data_questions_answers_author_profileImg {
  __typename: "File";
  uri: string;
}

export interface productFindById_ProductFindById_data_questions_answers_author {
  __typename: "User";
  _id: string;
  name: string;
  /**
   * 프로필 사진
   */
  profileImg: productFindById_ProductFindById_data_questions_answers_author_profileImg | null;
}

export interface productFindById_ProductFindById_data_questions_answers {
  __typename: "Answer";
  _id: string;
  createdAt: any;
  updatedAt: any;
  isDelete: boolean;
  content: string;
  author: productFindById_ProductFindById_data_questions_answers_author;
}

export interface productFindById_ProductFindById_data_questions_attachFiles {
  __typename: "File";
  name: string;
  uri: string;
  owner: string;
}

export interface productFindById_ProductFindById_data_questions_thumb {
  __typename: "File";
  name: string;
  uri: string;
  owner: string;
}

export interface productFindById_ProductFindById_data_questions_author_busiRegistration {
  __typename: "File";
  name: string;
  uri: string;
  owner: string;
}

export interface productFindById_ProductFindById_data_questions_author_profileImg {
  __typename: "File";
  uri: string;
}

export interface productFindById_ProductFindById_data_questions_author_guideLicense {
  __typename: "File";
  name: string;
  uri: string;
  owner: string;
}

export interface productFindById_ProductFindById_data_questions_author_guideLicenses {
  __typename: "File";
  name: string;
  uri: string;
  owner: string;
}

export interface productFindById_ProductFindById_data_questions_author_bankImg {
  __typename: "File";
  name: string;
  uri: string;
  owner: string;
}

export interface productFindById_ProductFindById_data_questions_author {
  __typename: "User";
  _id: string;
  /**
   * 닉네임 유니크
   */
  nickName: string;
  createdAt: any;
  updatedAt: any;
  isDelete: boolean;
  email: string;
  /**
   * 담당자명
   */
  manageName: string;
  connectionCount: number;
  role: UserRole;
  brith_date: string;
  address: string;
  address_detail: string;
  acceptSms: boolean;
  status: UserStatus;
  acceptEamil: boolean;
  /**
   * 매니저에 의한 회원가입 거절
   */
  isDenied: boolean | null;
  is_froreginer: boolean;
  /**
   * 기업 전화번호
   */
  busi_contact: string;
  /**
   * 담당자 연락처
   */
  manageContact: string;
  resignDate: any | null;
  gender: GENDER;
  busi_num: string;
  /**
   * 회원가입 거절 사유
   */
  denyReason: string | null;
  /**
   * 부서명
   */
  busi_department: string;
  isVerifiedManager: boolean;
  isVerifiedPhoneNumber: boolean;
  /**
   * 사업자 등록증
   */
  busiRegistration: productFindById_ProductFindById_data_questions_author_busiRegistration | null;
  /**
   * 개인 법인인지 아닌지 체크함 True = 법인
   */
  is_priv_corper: boolean;
  /**
   * 사업자명
   */
  busi_name: string;
  busi_address: string;
  account_number: string;
  name: string;
  bank_name: string;
  resignReason: string | null;
  resignReasonType: string | null;
  isResigned: boolean | null;
  phoneNumber: string;
  /**
   * 프로필 사진
   */
  profileImg: productFindById_ProductFindById_data_questions_author_profileImg | null;
  /**
   * 가이드 자격증
   */
  guideLicense: productFindById_ProductFindById_data_questions_author_guideLicense | null;
  /**
   * 가이드 자격증들
   */
  guideLicenses: productFindById_ProductFindById_data_questions_author_guideLicenses[] | null;
  /**
   * 주력언어
   */
  lang: Lang;
  /**
   * 통장사본
   */
  bankImg: productFindById_ProductFindById_data_questions_author_bankImg | null;
}

export interface productFindById_ProductFindById_data_questions {
  __typename: "Question";
  _id: string;
  createdAt: any;
  updatedAt: any;
  isDelete: boolean;
  title: string;
  contents: string;
  code: string;
  isNotice: boolean | null;
  isOpen: boolean | null;
  summary: string | null;
  subTitle: string | null;
  status: QuestionStatus;
  answers: productFindById_ProductFindById_data_questions_answers[] | null;
  keyWards: string[] | null;
  attachFiles: productFindById_ProductFindById_data_questions_attachFiles[] | null;
  thumb: productFindById_ProductFindById_data_questions_thumb | null;
  viewCount: number;
  likeCount: number;
  no: number;
  author: productFindById_ProductFindById_data_questions_author | null;
}

export interface productFindById_ProductFindById_data {
  __typename: "Product";
  _id: string;
  createdAt: any;
  updatedAt: any;
  regionLabel: string | null;
  isDelete: boolean;
  title: string;
  code: string;
  lang: Lang;
  /**
   * 취소를 제외한 상품 하나에 대한 모든 인원
   */
  peopleCount: number;
  contents: string;
  determined: boolean;
  endDate: any;
  dateRange: number;
  adminMemo: string;
  groupCode: string;
  region: productFindById_ProductFindById_data_region | null;
  category: productFindById_ProductFindById_data_category | null;
  /**
   * 예약인원에 대한 요약
   */
  bookerSummary: productFindById_ProductFindById_data_bookerSummary;
  status: ProductStatus;
  itinerary: productFindById_ProductFindById_data_itinerary[];
  inOrNor: string;
  info: string;
  caution: string | null;
  images: productFindById_ProductFindById_data_images[] | null;
  keyWards: string[] | null;
  address: string;
  thumb: productFindById_ProductFindById_data_thumb | null;
  startPoint: string;
  maxMember: number;
  minMember: number;
  /**
   * 유저가 업데이트 요청을 했을때 어떤 변경이였는지 메모
   */
  requestMemo: string;
  subTitle: string | null;
  adult_price: number;
  bookingCount: number;
  kids_price: number;
  /**
   * 상품 하나에 대한 결제완료된 예약 총 인원
   */
  compeltePeopleCnt: number;
  baby_price: number;
  isNotice: boolean | null;
  elseReq: ProductReOpenReq | null;
  isOpen: boolean | null;
  type: ProductType;
  startDate: any;
  Dday: number;
  questionIds: string[] | null;
  productReview: productFindById_ProductFindById_data_productReview[] | null;
  author: productFindById_ProductFindById_data_author | null;
  questions: productFindById_ProductFindById_data_questions[] | null;
}

export interface productFindById_ProductFindById {
  __typename: "ProductFindByIdResponse";
  ok: boolean;
  error: productFindById_ProductFindById_error | null;
  data: productFindById_ProductFindById_data | null;
}

export interface productFindById {
  ProductFindById: productFindById_ProductFindById;
}

export interface productFindByIdVariables {
  _id: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: productFindByIdForSeller
// ====================================================

export interface productFindByIdForSeller_ProductFindByIdForSeller_error {
  __typename: "CustomError";
  location: string;
  severity: ERR_SEVERITY;
  code: ERR_CODE;
  message: string;
}

export interface productFindByIdForSeller_ProductFindByIdForSeller_data_region {
  __typename: "Category";
  label: string;
  _id: string;
}

export interface productFindByIdForSeller_ProductFindByIdForSeller_data_category {
  __typename: "Category";
  _id: string;
  label: string;
}

export interface productFindByIdForSeller_ProductFindByIdForSeller_data_bookerSummary {
  __typename: "BookerSummary";
  adultCount: number;
  babyCount: number;
  kidsCount: number;
  completeBookCount: number;
  readyBookCount: number;
  cancelBookCount: number;
}

export interface productFindByIdForSeller_ProductFindByIdForSeller_data_itinerary_images {
  __typename: "File";
  name: string;
  uri: string;
  owner: string;
}

export interface productFindByIdForSeller_ProductFindByIdForSeller_data_itinerary {
  __typename: "Itinerary";
  _id: string;
  createdAt: any;
  updatedAt: any;
  isDelete: boolean;
  title: string;
  contents: string[];
  images: productFindByIdForSeller_ProductFindByIdForSeller_data_itinerary_images[];
  date: any;
}

export interface productFindByIdForSeller_ProductFindByIdForSeller_data_images {
  __typename: "File";
  name: string;
  uri: string;
  owner: string;
}

export interface productFindByIdForSeller_ProductFindByIdForSeller_data_thumb {
  __typename: "File";
  uri: string;
}

export interface productFindByIdForSeller_ProductFindByIdForSeller_data_author_busiRegistration {
  __typename: "File";
  name: string;
  uri: string;
  owner: string;
}

export interface productFindByIdForSeller_ProductFindByIdForSeller_data_author_profileImg {
  __typename: "File";
  uri: string;
}

export interface productFindByIdForSeller_ProductFindByIdForSeller_data_author_guideLicense {
  __typename: "File";
  name: string;
  uri: string;
  owner: string;
}

export interface productFindByIdForSeller_ProductFindByIdForSeller_data_author_guideLicenses {
  __typename: "File";
  name: string;
  uri: string;
  owner: string;
}

export interface productFindByIdForSeller_ProductFindByIdForSeller_data_author_bankImg {
  __typename: "File";
  name: string;
  uri: string;
  owner: string;
}

export interface productFindByIdForSeller_ProductFindByIdForSeller_data_author {
  __typename: "User";
  _id: string;
  /**
   * 닉네임 유니크
   */
  nickName: string;
  createdAt: any;
  updatedAt: any;
  isDelete: boolean;
  email: string;
  /**
   * 담당자명
   */
  manageName: string;
  connectionCount: number;
  role: UserRole;
  brith_date: string;
  address: string;
  address_detail: string;
  acceptSms: boolean;
  status: UserStatus;
  acceptEamil: boolean;
  /**
   * 매니저에 의한 회원가입 거절
   */
  isDenied: boolean | null;
  is_froreginer: boolean;
  /**
   * 기업 전화번호
   */
  busi_contact: string;
  /**
   * 담당자 연락처
   */
  manageContact: string;
  resignDate: any | null;
  gender: GENDER;
  busi_num: string;
  /**
   * 회원가입 거절 사유
   */
  denyReason: string | null;
  /**
   * 부서명
   */
  busi_department: string;
  isVerifiedManager: boolean;
  isVerifiedPhoneNumber: boolean;
  /**
   * 사업자 등록증
   */
  busiRegistration: productFindByIdForSeller_ProductFindByIdForSeller_data_author_busiRegistration | null;
  /**
   * 개인 법인인지 아닌지 체크함 True = 법인
   */
  is_priv_corper: boolean;
  /**
   * 사업자명
   */
  busi_name: string;
  busi_address: string;
  account_number: string;
  name: string;
  bank_name: string;
  resignReason: string | null;
  resignReasonType: string | null;
  isResigned: boolean | null;
  phoneNumber: string;
  /**
   * 프로필 사진
   */
  profileImg: productFindByIdForSeller_ProductFindByIdForSeller_data_author_profileImg | null;
  /**
   * 가이드 자격증
   */
  guideLicense: productFindByIdForSeller_ProductFindByIdForSeller_data_author_guideLicense | null;
  /**
   * 가이드 자격증들
   */
  guideLicenses: productFindByIdForSeller_ProductFindByIdForSeller_data_author_guideLicenses[] | null;
  /**
   * 주력언어
   */
  lang: Lang;
  /**
   * 통장사본
   */
  bankImg: productFindByIdForSeller_ProductFindByIdForSeller_data_author_bankImg | null;
}

export interface productFindByIdForSeller_ProductFindByIdForSeller_data_requestHistory {
  __typename: "RequestHistory";
  methodType: MethodType;
  reqType: RequestStatus;
  date: any;
  reason: string;
}

export interface productFindByIdForSeller_ProductFindByIdForSeller_data_settlement {
  __typename: "Settlement";
  _id: string;
  createdAt: any;
  updatedAt: any;
  isDelete: boolean;
  status: SettlementStatus;
  totalPrice: number;
  cardPrice: number;
  bankPrice: number;
  settlementPrice: number;
  totalFee: number;
  cardFee: number;
  niceCardFee: number;
  jandaCardFee: number;
  bankFee: number;
  additionFeeSum: number;
  jandaFee: number;
  cancelReturnPriceTotal: number;
  cancelReturnPrice: number;
  reserveDiffPrice: number[];
  reserveDiffPriceTotal: number;
  payReqPrice: number;
  requestDate: any | null;
  acceptDate: any | null;
  completeDate: any | null;
  cancelDate: any | null;
}

export interface productFindByIdForSeller_ProductFindByIdForSeller_data_bookings_booker_busiRegistration {
  __typename: "File";
  name: string;
  uri: string;
  owner: string;
}

export interface productFindByIdForSeller_ProductFindByIdForSeller_data_bookings_booker_profileImg {
  __typename: "File";
  uri: string;
}

export interface productFindByIdForSeller_ProductFindByIdForSeller_data_bookings_booker_guideLicense {
  __typename: "File";
  name: string;
  uri: string;
  owner: string;
}

export interface productFindByIdForSeller_ProductFindByIdForSeller_data_bookings_booker_guideLicenses {
  __typename: "File";
  name: string;
  uri: string;
  owner: string;
}

export interface productFindByIdForSeller_ProductFindByIdForSeller_data_bookings_booker_bankImg {
  __typename: "File";
  name: string;
  uri: string;
  owner: string;
}

export interface productFindByIdForSeller_ProductFindByIdForSeller_data_bookings_booker {
  __typename: "User";
  _id: string;
  /**
   * 닉네임 유니크
   */
  nickName: string;
  createdAt: any;
  updatedAt: any;
  isDelete: boolean;
  email: string;
  /**
   * 담당자명
   */
  manageName: string;
  connectionCount: number;
  role: UserRole;
  brith_date: string;
  address: string;
  address_detail: string;
  acceptSms: boolean;
  status: UserStatus;
  acceptEamil: boolean;
  /**
   * 매니저에 의한 회원가입 거절
   */
  isDenied: boolean | null;
  is_froreginer: boolean;
  /**
   * 기업 전화번호
   */
  busi_contact: string;
  /**
   * 담당자 연락처
   */
  manageContact: string;
  resignDate: any | null;
  gender: GENDER;
  busi_num: string;
  /**
   * 회원가입 거절 사유
   */
  denyReason: string | null;
  /**
   * 부서명
   */
  busi_department: string;
  isVerifiedManager: boolean;
  isVerifiedPhoneNumber: boolean;
  /**
   * 사업자 등록증
   */
  busiRegistration: productFindByIdForSeller_ProductFindByIdForSeller_data_bookings_booker_busiRegistration | null;
  /**
   * 개인 법인인지 아닌지 체크함 True = 법인
   */
  is_priv_corper: boolean;
  /**
   * 사업자명
   */
  busi_name: string;
  busi_address: string;
  account_number: string;
  name: string;
  bank_name: string;
  resignReason: string | null;
  resignReasonType: string | null;
  isResigned: boolean | null;
  phoneNumber: string;
  /**
   * 프로필 사진
   */
  profileImg: productFindByIdForSeller_ProductFindByIdForSeller_data_bookings_booker_profileImg | null;
  /**
   * 가이드 자격증
   */
  guideLicense: productFindByIdForSeller_ProductFindByIdForSeller_data_bookings_booker_guideLicense | null;
  /**
   * 가이드 자격증들
   */
  guideLicenses: productFindByIdForSeller_ProductFindByIdForSeller_data_bookings_booker_guideLicenses[] | null;
  /**
   * 주력언어
   */
  lang: Lang;
  /**
   * 통장사본
   */
  bankImg: productFindByIdForSeller_ProductFindByIdForSeller_data_bookings_booker_bankImg | null;
}

export interface productFindByIdForSeller_ProductFindByIdForSeller_data_bookings_payment_history {
  __typename: "TxHistory";
  status: string;
  price: number;
  metadata: any | null;
  createdAt: any;
  updatedAt: any;
}

export interface productFindByIdForSeller_ProductFindByIdForSeller_data_bookings_payment {
  __typename: "Payment";
  _id: string;
  createdAt: any;
  updatedAt: any;
  isDelete: boolean;
  payMethod: PayMethod;
  status: PaymentStatus;
  price: number;
  totalCancelPrice: number;
  cancelDate: any | null;
  isPartialCancel: number;
  groupCode: string | null;
  history: productFindByIdForSeller_ProductFindByIdForSeller_data_bookings_payment_history[];
}

export interface productFindByIdForSeller_ProductFindByIdForSeller_data_bookings {
  __typename: "Booking";
  booker: productFindByIdForSeller_ProductFindByIdForSeller_data_bookings_booker | null;
  _id: string;
  createdAt: any;
  cancelDate: any | null;
  gender: GENDER | null;
  age: string | null;
  payMethod: PayMethod;
  updatedAt: any;
  isDelete: boolean;
  leftTime: number;
  adultCount: number;
  kidCount: number;
  cancelMemo: string | null;
  babyCount: number;
  totalCount: number;
  message: string | null;
  isCancelRequest: boolean | null;
  bookerInclue: boolean;
  bookingPrice: number;
  status: BookingStatus | null;
  isMember: boolean | null;
  memo: string | null;
  code: string;
  groupCode: string;
  name: string;
  email: string;
  phoneNumber: string;
  /**
   * 결제가 되었는지
   */
  isPaid: boolean | null;
  payment: productFindByIdForSeller_ProductFindByIdForSeller_data_bookings_payment | null;
}

export interface productFindByIdForSeller_ProductFindByIdForSeller_data {
  __typename: "Product";
  _id: string;
  createdAt: any;
  updatedAt: any;
  regionLabel: string | null;
  isDelete: boolean;
  title: string;
  code: string;
  lang: Lang;
  /**
   * 취소를 제외한 상품 하나에 대한 모든 인원
   */
  peopleCount: number;
  contents: string;
  determined: boolean;
  endDate: any;
  dateRange: number;
  adminMemo: string;
  groupCode: string;
  region: productFindByIdForSeller_ProductFindByIdForSeller_data_region | null;
  category: productFindByIdForSeller_ProductFindByIdForSeller_data_category | null;
  /**
   * 예약인원에 대한 요약
   */
  bookerSummary: productFindByIdForSeller_ProductFindByIdForSeller_data_bookerSummary;
  status: ProductStatus;
  itinerary: productFindByIdForSeller_ProductFindByIdForSeller_data_itinerary[];
  inOrNor: string;
  info: string;
  caution: string | null;
  images: productFindByIdForSeller_ProductFindByIdForSeller_data_images[] | null;
  keyWards: string[] | null;
  address: string;
  thumb: productFindByIdForSeller_ProductFindByIdForSeller_data_thumb | null;
  startPoint: string;
  maxMember: number;
  minMember: number;
  /**
   * 유저가 업데이트 요청을 했을때 어떤 변경이였는지 메모
   */
  requestMemo: string;
  subTitle: string | null;
  adult_price: number;
  bookingCount: number;
  kids_price: number;
  /**
   * 상품 하나에 대한 결제완료된 예약 총 인원
   */
  compeltePeopleCnt: number;
  baby_price: number;
  isNotice: boolean | null;
  elseReq: ProductReOpenReq | null;
  isOpen: boolean | null;
  type: ProductType;
  startDate: any;
  Dday: number;
  author: productFindByIdForSeller_ProductFindByIdForSeller_data_author | null;
  requestHistory: productFindByIdForSeller_ProductFindByIdForSeller_data_requestHistory[];
  settlement: productFindByIdForSeller_ProductFindByIdForSeller_data_settlement | null;
  bookings: productFindByIdForSeller_ProductFindByIdForSeller_data_bookings[];
}

export interface productFindByIdForSeller_ProductFindByIdForSeller {
  __typename: "ProductFindByIdForSellerResponse";
  ok: boolean;
  error: productFindByIdForSeller_ProductFindByIdForSeller_error | null;
  data: productFindByIdForSeller_ProductFindByIdForSeller_data | null;
}

export interface productFindByIdForSeller {
  ProductFindByIdForSeller: productFindByIdForSeller_ProductFindByIdForSeller;
}

export interface productFindByIdForSellerVariables {
  _id: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: travelCancel
// ====================================================

export interface travelCancel_TravelCancel_error {
  __typename: "CustomError";
  location: string;
  severity: ERR_SEVERITY;
  code: ERR_CODE;
  message: string;
}

export interface travelCancel_TravelCancel {
  __typename: "TravelCancelResponse";
  ok: boolean;
  error: travelCancel_TravelCancel_error | null;
}

export interface travelCancel {
  /**
   * 아예 출발을 취소하는 함수(문자, 알림, 환불) CanCel 된 상품은 다시 살릴수 없다.
   */
  TravelCancel: travelCancel_TravelCancel;
}

export interface travelCancelVariables {
  reason: string;
  ProductId: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: travelDetermine
// ====================================================

export interface travelDetermine_TravelDetermine_error {
  __typename: "CustomError";
  location: string;
  severity: ERR_SEVERITY;
  code: ERR_CODE;
  message: string;
}

export interface travelDetermine_TravelDetermine {
  __typename: "TravelDetermineResponse";
  ok: boolean;
  error: travelDetermine_TravelDetermine_error | null;
}

export interface travelDetermine {
  /**
   * 출발 확정하는 함수(문자, 알림)
   */
  TravelDetermine: travelDetermine_TravelDetermine;
}

export interface travelDetermineVariables {
  message: string;
  ProductId: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: travelWithdrwal
// ====================================================

export interface travelWithdrwal_TravelWithdrwal_error {
  __typename: "CustomError";
  location: string;
  severity: ERR_SEVERITY;
  code: ERR_CODE;
  message: string;
}

export interface travelWithdrwal_TravelWithdrwal {
  __typename: "TravelWithdrwalResponse";
  ok: boolean;
  error: travelWithdrwal_TravelWithdrwal_error | null;
}

export interface travelWithdrwal {
  /**
   * 출발 확정 철회함 (문자, 알림)
   */
  TravelWithdrwal: travelWithdrwal_TravelWithdrwal;
}

export interface travelWithdrwalVariables {
  reason: string;
  ProductId: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: productElseReq
// ====================================================

export interface productElseReq_ProductReOpenReq_error {
  __typename: "CustomError";
  location: string;
  severity: ERR_SEVERITY;
  code: ERR_CODE;
  message: string;
}

export interface productElseReq_ProductReOpenReq {
  __typename: "ProductReOpenReqResponse";
  ok: boolean;
  error: productElseReq_ProductReOpenReq_error | null;
}

export interface productElseReq {
  /**
   * 어떠한 요청을 수락한다.
   */
  ProductReOpenReq: productElseReq_ProductReOpenReq;
}

export interface productElseReqVariables {
  ProductId: string;
  req: ProductReOpenReq;
  reason: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: productElseAccept
// ====================================================

export interface productElseAccept_ProductReOpenAccept_error {
  __typename: "CustomError";
  location: string;
  severity: ERR_SEVERITY;
  code: ERR_CODE;
  message: string;
}

export interface productElseAccept_ProductReOpenAccept {
  __typename: "ProductReOpenAcceptResponse";
  ok: boolean;
  error: productElseAccept_ProductReOpenAccept_error | null;
}

export interface productElseAccept {
  /**
   * 상품 취소를 철회한다. 
   */
  ProductReOpenAccept: productElseAccept_ProductReOpenAccept;
}

export interface productElseAcceptVariables {
  ProductId: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: productReOpenDeny
// ====================================================

export interface productReOpenDeny_ProductReOpenDeny_error {
  __typename: "CustomError";
  location: string;
  severity: ERR_SEVERITY;
  code: ERR_CODE;
  message: string;
}

export interface productReOpenDeny_ProductReOpenDeny {
  __typename: "ProductReOpenDenyResponse";
  ok: boolean;
  error: productReOpenDeny_ProductReOpenDeny_error | null;
}

export interface productReOpenDeny {
  /**
   * 어떠한 요청을 거절한다.
   */
  ProductReOpenDeny: productReOpenDeny_ProductReOpenDeny;
}

export interface productReOpenDenyVariables {
  ProductId: string;
  reason: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: qnaFindById
// ====================================================

export interface qnaFindById_QnaFindById_error {
  __typename: "CustomError";
  location: string;
  severity: ERR_SEVERITY;
  code: ERR_CODE;
  message: string;
}

export interface qnaFindById_QnaFindById_data_author_busiRegistration {
  __typename: "File";
  name: string;
  uri: string;
  owner: string;
}

export interface qnaFindById_QnaFindById_data_author_profileImg {
  __typename: "File";
  uri: string;
}

export interface qnaFindById_QnaFindById_data_author_guideLicense {
  __typename: "File";
  name: string;
  uri: string;
  owner: string;
}

export interface qnaFindById_QnaFindById_data_author_guideLicenses {
  __typename: "File";
  name: string;
  uri: string;
  owner: string;
}

export interface qnaFindById_QnaFindById_data_author_bankImg {
  __typename: "File";
  name: string;
  uri: string;
  owner: string;
}

export interface qnaFindById_QnaFindById_data_author {
  __typename: "User";
  _id: string;
  /**
   * 닉네임 유니크
   */
  nickName: string;
  createdAt: any;
  updatedAt: any;
  isDelete: boolean;
  email: string;
  /**
   * 담당자명
   */
  manageName: string;
  connectionCount: number;
  role: UserRole;
  brith_date: string;
  address: string;
  address_detail: string;
  acceptSms: boolean;
  status: UserStatus;
  acceptEamil: boolean;
  /**
   * 매니저에 의한 회원가입 거절
   */
  isDenied: boolean | null;
  is_froreginer: boolean;
  /**
   * 기업 전화번호
   */
  busi_contact: string;
  /**
   * 담당자 연락처
   */
  manageContact: string;
  resignDate: any | null;
  gender: GENDER;
  busi_num: string;
  /**
   * 회원가입 거절 사유
   */
  denyReason: string | null;
  /**
   * 부서명
   */
  busi_department: string;
  isVerifiedManager: boolean;
  isVerifiedPhoneNumber: boolean;
  /**
   * 사업자 등록증
   */
  busiRegistration: qnaFindById_QnaFindById_data_author_busiRegistration | null;
  /**
   * 개인 법인인지 아닌지 체크함 True = 법인
   */
  is_priv_corper: boolean;
  /**
   * 사업자명
   */
  busi_name: string;
  busi_address: string;
  account_number: string;
  name: string;
  bank_name: string;
  resignReason: string | null;
  resignReasonType: string | null;
  isResigned: boolean | null;
  phoneNumber: string;
  /**
   * 프로필 사진
   */
  profileImg: qnaFindById_QnaFindById_data_author_profileImg | null;
  /**
   * 가이드 자격증
   */
  guideLicense: qnaFindById_QnaFindById_data_author_guideLicense | null;
  /**
   * 가이드 자격증들
   */
  guideLicenses: qnaFindById_QnaFindById_data_author_guideLicenses[] | null;
  /**
   * 주력언어
   */
  lang: Lang;
  /**
   * 통장사본
   */
  bankImg: qnaFindById_QnaFindById_data_author_bankImg | null;
}

export interface qnaFindById_QnaFindById_data_attachFiles {
  __typename: "File";
  name: string;
  uri: string;
  owner: string;
}

export interface qnaFindById_QnaFindById_data_thumb {
  __typename: "File";
  name: string;
  uri: string;
  owner: string;
}

export interface qnaFindById_QnaFindById_data_category {
  __typename: "Category";
  _id: string;
  label: string;
}

export interface qnaFindById_QnaFindById_data {
  __typename: "Qna";
  _id: string;
  createdAt: any;
  updatedAt: any;
  isDelete: boolean;
  title: string;
  contents: string;
  author: qnaFindById_QnaFindById_data_author | null;
  isNotice: boolean | null;
  isOpen: boolean | null;
  summary: string | null;
  subTitle: string | null;
  keyWards: string[] | null;
  attachFiles: qnaFindById_QnaFindById_data_attachFiles[] | null;
  thumb: qnaFindById_QnaFindById_data_thumb | null;
  viewCount: number;
  category: qnaFindById_QnaFindById_data_category | null;
}

export interface qnaFindById_QnaFindById {
  __typename: "QnaFindByIdResponse";
  ok: boolean;
  error: qnaFindById_QnaFindById_error | null;
  data: qnaFindById_QnaFindById_data | null;
}

export interface qnaFindById {
  QnaFindById: qnaFindById_QnaFindById;
}

export interface qnaFindByIdVariables {
  _id: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: qnaList
// ====================================================

export interface qnaList_QnaList_error {
  __typename: "CustomError";
  location: string;
  severity: ERR_SEVERITY;
  code: ERR_CODE;
  message: string;
}

export interface qnaList_QnaList_page {
  __typename: "Page";
  /**
   * 현재 페이지 번호
   */
  page: number;
  /**
   * 페이지당 문서 갯수
   */
  cntPerPage: number;
  /**
   * 페이지 총 갯수
   */
  totalPageSize: number;
  /**
   * 시작 페이지 번호
   */
  start_page_num: number;
  /**
   * 마지막 페이지 번호
   */
  end_page_num: number;
  /**
   * 이전(<<) 표시 여부
   */
  isPrev: boolean;
  /**
   * 다음(>>) 표시 여부
   */
  isNext: boolean;
  /**
   * 이전(<<) 클릭시 표시할 페이지 번호
   */
  prev_page_num: number;
  /**
   * 다음(>>) 클릭시 표시할 페이지 번호
   */
  next_page_num: number;
  /**
   * 총 갯수
   */
  totalCount: number;
  /**
   * 마지막 패이지의 갯수 (index계산 하는데 사용함)
   */
  remainder: number;
}

export interface qnaList_QnaList_data_author_busiRegistration {
  __typename: "File";
  name: string;
  uri: string;
  owner: string;
}

export interface qnaList_QnaList_data_author_profileImg {
  __typename: "File";
  uri: string;
}

export interface qnaList_QnaList_data_author_guideLicense {
  __typename: "File";
  name: string;
  uri: string;
  owner: string;
}

export interface qnaList_QnaList_data_author_guideLicenses {
  __typename: "File";
  name: string;
  uri: string;
  owner: string;
}

export interface qnaList_QnaList_data_author_bankImg {
  __typename: "File";
  name: string;
  uri: string;
  owner: string;
}

export interface qnaList_QnaList_data_author {
  __typename: "User";
  _id: string;
  /**
   * 닉네임 유니크
   */
  nickName: string;
  createdAt: any;
  updatedAt: any;
  isDelete: boolean;
  email: string;
  /**
   * 담당자명
   */
  manageName: string;
  connectionCount: number;
  role: UserRole;
  brith_date: string;
  address: string;
  address_detail: string;
  acceptSms: boolean;
  status: UserStatus;
  acceptEamil: boolean;
  /**
   * 매니저에 의한 회원가입 거절
   */
  isDenied: boolean | null;
  is_froreginer: boolean;
  /**
   * 기업 전화번호
   */
  busi_contact: string;
  /**
   * 담당자 연락처
   */
  manageContact: string;
  resignDate: any | null;
  gender: GENDER;
  busi_num: string;
  /**
   * 회원가입 거절 사유
   */
  denyReason: string | null;
  /**
   * 부서명
   */
  busi_department: string;
  isVerifiedManager: boolean;
  isVerifiedPhoneNumber: boolean;
  /**
   * 사업자 등록증
   */
  busiRegistration: qnaList_QnaList_data_author_busiRegistration | null;
  /**
   * 개인 법인인지 아닌지 체크함 True = 법인
   */
  is_priv_corper: boolean;
  /**
   * 사업자명
   */
  busi_name: string;
  busi_address: string;
  account_number: string;
  name: string;
  bank_name: string;
  resignReason: string | null;
  resignReasonType: string | null;
  isResigned: boolean | null;
  phoneNumber: string;
  /**
   * 프로필 사진
   */
  profileImg: qnaList_QnaList_data_author_profileImg | null;
  /**
   * 가이드 자격증
   */
  guideLicense: qnaList_QnaList_data_author_guideLicense | null;
  /**
   * 가이드 자격증들
   */
  guideLicenses: qnaList_QnaList_data_author_guideLicenses[] | null;
  /**
   * 주력언어
   */
  lang: Lang;
  /**
   * 통장사본
   */
  bankImg: qnaList_QnaList_data_author_bankImg | null;
}

export interface qnaList_QnaList_data_attachFiles {
  __typename: "File";
  name: string;
  uri: string;
  owner: string;
}

export interface qnaList_QnaList_data_thumb {
  __typename: "File";
  name: string;
  uri: string;
  owner: string;
}

export interface qnaList_QnaList_data_category {
  __typename: "Category";
  _id: string;
  label: string;
}

export interface qnaList_QnaList_data {
  __typename: "Qna";
  _id: string;
  createdAt: any;
  updatedAt: any;
  isDelete: boolean;
  title: string;
  contents: string;
  author: qnaList_QnaList_data_author | null;
  isNotice: boolean | null;
  isOpen: boolean | null;
  summary: string | null;
  subTitle: string | null;
  keyWards: string[] | null;
  attachFiles: qnaList_QnaList_data_attachFiles[] | null;
  thumb: qnaList_QnaList_data_thumb | null;
  viewCount: number;
  category: qnaList_QnaList_data_category | null;
}

export interface qnaList_QnaList {
  __typename: "QnaListResponse";
  ok: boolean;
  error: qnaList_QnaList_error | null;
  page: qnaList_QnaList_page;
  data: qnaList_QnaList_data[];
}

export interface qnaList {
  QnaList: qnaList_QnaList;
}

export interface qnaListVariables {
  sort?: _QnaSort[] | null;
  filter?: _QnaFilter | null;
  pageInput: pageInput;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: qnaCreate
// ====================================================

export interface qnaCreate_QnaCreate_error {
  __typename: "CustomError";
  location: string;
  severity: ERR_SEVERITY;
  code: ERR_CODE;
  message: string;
}

export interface qnaCreate_QnaCreate_data {
  __typename: "Qna";
  _id: string;
}

export interface qnaCreate_QnaCreate {
  __typename: "QnaCreateResponse";
  ok: boolean;
  error: qnaCreate_QnaCreate_error | null;
  data: qnaCreate_QnaCreate_data | null;
}

export interface qnaCreate {
  QnaCreate: qnaCreate_QnaCreate;
}

export interface qnaCreateVariables {
  params: QnaCreateInput;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: qnaDelete
// ====================================================

export interface qnaDelete_QnaDelete_error {
  __typename: "CustomError";
  location: string;
  severity: ERR_SEVERITY;
  code: ERR_CODE;
  message: string;
}

export interface qnaDelete_QnaDelete {
  __typename: "QnaDeleteResponse";
  ok: boolean;
  error: qnaDelete_QnaDelete_error | null;
}

export interface qnaDelete {
  QnaDelete: qnaDelete_QnaDelete;
}

export interface qnaDeleteVariables {
  id: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: qnaUpdate
// ====================================================

export interface qnaUpdate_QnaUpdate_error {
  __typename: "CustomError";
  location: string;
  severity: ERR_SEVERITY;
  code: ERR_CODE;
  message: string;
}

export interface qnaUpdate_QnaUpdate_data {
  __typename: "Qna";
  _id: string;
}

export interface qnaUpdate_QnaUpdate {
  __typename: "QnaUpdateResponse";
  ok: boolean;
  error: qnaUpdate_QnaUpdate_error | null;
  data: qnaUpdate_QnaUpdate_data | null;
}

export interface qnaUpdate {
  QnaUpdate: qnaUpdate_QnaUpdate;
}

export interface qnaUpdateVariables {
  params: QnaUpdateInput;
  id: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: pageInfoRead
// ====================================================

export interface pageInfoRead_PageInfoRead_error {
  __typename: "CustomError";
  location: string;
  severity: ERR_SEVERITY;
  code: ERR_CODE;
  message: string;
}

export interface pageInfoRead_PageInfoRead_data {
  __typename: "PageInfo";
  _id: string;
  updatedAt: any;
  isDelete: boolean;
  key: string;
  value: any;
}

export interface pageInfoRead_PageInfoRead {
  __typename: "PageInfoReadResponse";
  ok: boolean;
  error: pageInfoRead_PageInfoRead_error | null;
  data: pageInfoRead_PageInfoRead_data | null;
}

export interface pageInfoRead {
  PageInfoRead: pageInfoRead_PageInfoRead;
}

export interface pageInfoReadVariables {
  key: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getContext
// ====================================================

export interface getContext_GetProfile_error {
  __typename: "CustomError";
  location: string;
  severity: ERR_SEVERITY;
  code: ERR_CODE;
  message: string;
}

export interface getContext_GetProfile_data_busiRegistration {
  __typename: "File";
  name: string;
  uri: string;
  owner: string;
}

export interface getContext_GetProfile_data_profileImg {
  __typename: "File";
  uri: string;
}

export interface getContext_GetProfile_data_guideLicense {
  __typename: "File";
  name: string;
  uri: string;
  owner: string;
}

export interface getContext_GetProfile_data_guideLicenses {
  __typename: "File";
  name: string;
  uri: string;
  owner: string;
}

export interface getContext_GetProfile_data_bankImg {
  __typename: "File";
  name: string;
  uri: string;
  owner: string;
}

export interface getContext_GetProfile_data_unReadNoties {
  __typename: "SystemNoti";
  _id: string;
  createdAt: any;
  updatedAt: any;
  isDelete: boolean;
  type: SystemNotiType;
  /**
   * html
   */
  content: string;
  isRead: boolean;
}

export interface getContext_GetProfile_data_products {
  __typename: "Product";
  _id: string;
  title: string;
  groupCode: string;
}

export interface getContext_GetProfile_data_bookings_seller {
  __typename: "User";
  _id: string;
  name: string;
}

export interface getContext_GetProfile_data_bookings_product {
  __typename: "Product";
  _id: string;
  title: string;
}

export interface getContext_GetProfile_data_bookings {
  __typename: "Booking";
  _id: string;
  createdAt: any;
  cancelDate: any | null;
  gender: GENDER | null;
  age: string | null;
  payMethod: PayMethod;
  updatedAt: any;
  isDelete: boolean;
  leftTime: number;
  adultCount: number;
  kidCount: number;
  cancelMemo: string | null;
  babyCount: number;
  totalCount: number;
  message: string | null;
  isCancelRequest: boolean | null;
  bookerInclue: boolean;
  bookingPrice: number;
  status: BookingStatus | null;
  isMember: boolean | null;
  memo: string | null;
  code: string;
  groupCode: string;
  name: string;
  email: string;
  phoneNumber: string;
  /**
   * 결제가 되었는지
   */
  isPaid: boolean | null;
  seller: getContext_GetProfile_data_bookings_seller;
  product: getContext_GetProfile_data_bookings_product;
}

export interface getContext_GetProfile_data {
  __typename: "User";
  _id: string;
  /**
   * 닉네임 유니크
   */
  nickName: string;
  createdAt: any;
  updatedAt: any;
  isDelete: boolean;
  email: string;
  /**
   * 담당자명
   */
  manageName: string;
  connectionCount: number;
  role: UserRole;
  brith_date: string;
  address: string;
  address_detail: string;
  acceptSms: boolean;
  status: UserStatus;
  acceptEamil: boolean;
  /**
   * 매니저에 의한 회원가입 거절
   */
  isDenied: boolean | null;
  is_froreginer: boolean;
  /**
   * 기업 전화번호
   */
  busi_contact: string;
  /**
   * 담당자 연락처
   */
  manageContact: string;
  resignDate: any | null;
  gender: GENDER;
  busi_num: string;
  /**
   * 회원가입 거절 사유
   */
  denyReason: string | null;
  /**
   * 부서명
   */
  busi_department: string;
  isVerifiedManager: boolean;
  isVerifiedPhoneNumber: boolean;
  /**
   * 사업자 등록증
   */
  busiRegistration: getContext_GetProfile_data_busiRegistration | null;
  /**
   * 개인 법인인지 아닌지 체크함 True = 법인
   */
  is_priv_corper: boolean;
  /**
   * 사업자명
   */
  busi_name: string;
  busi_address: string;
  account_number: string;
  name: string;
  bank_name: string;
  resignReason: string | null;
  resignReasonType: string | null;
  isResigned: boolean | null;
  phoneNumber: string;
  /**
   * 프로필 사진
   */
  profileImg: getContext_GetProfile_data_profileImg | null;
  /**
   * 가이드 자격증
   */
  guideLicense: getContext_GetProfile_data_guideLicense | null;
  /**
   * 가이드 자격증들
   */
  guideLicenses: getContext_GetProfile_data_guideLicenses[] | null;
  /**
   * 주력언어
   */
  lang: Lang;
  /**
   * 통장사본
   */
  bankImg: getContext_GetProfile_data_bankImg | null;
  /**
   * 판매자에 대한 키워드 모음
   */
  keywards: string[] | null;
  unReadNoties: getContext_GetProfile_data_unReadNoties[] | null;
  products: getContext_GetProfile_data_products[];
  bookings: getContext_GetProfile_data_bookings[];
}

export interface getContext_GetProfile {
  __typename: "MeResponse";
  ok: boolean;
  error: getContext_GetProfile_error | null;
  data: getContext_GetProfile_data | null;
}

export interface getContext_GroupList_error {
  __typename: "CustomError";
  location: string;
  severity: ERR_SEVERITY;
  code: ERR_CODE;
  message: string;
}

export interface getContext_GroupList_data_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface getContext_GroupList_data {
  __typename: "Group";
  _id: string;
  createdAt: any;
  updatedAt: any;
  isDelete: boolean;
  /**
   * 어떤 모델을 대상으로 정렬을 하는지 정의함
   */
  target: string;
  /**
   * 이 그룹을 호출하기 위한 Uniq한 key값
   */
  key: string;
  label: string;
  /**
   * 그룹안의 순서는 이 배열의 인덱스로 조정됨
   */
  members: string[];
  tags: getContext_GroupList_data_tags[] | null;
}

export interface getContext_GroupList {
  __typename: "GroupListResponse";
  ok: boolean;
  error: getContext_GroupList_error | null;
  data: getContext_GroupList_data[] | null;
}

export interface getContext_CategoryList_error {
  __typename: "CustomError";
  location: string;
  severity: ERR_SEVERITY;
  code: ERR_CODE;
  message: string;
}

export interface getContext_CategoryList_data_localeLabel {
  __typename: "Locale";
  ko: string;
  en: string;
  ja: string;
  chi: string;
}

export interface getContext_CategoryList_data {
  __typename: "Category";
  _id: string;
  createdAt: any;
  updatedAt: any;
  isDelete: boolean;
  localeLabel: getContext_CategoryList_data_localeLabel | null;
  label: string;
  type: CategoryType;
}

export interface getContext_CategoryList {
  __typename: "CategoryListResponse";
  ok: boolean;
  error: getContext_CategoryList_error | null;
  data: getContext_CategoryList_data[] | null;
}

export interface getContext_Homepage_error {
  __typename: "CustomError";
  location: string;
  severity: ERR_SEVERITY;
  code: ERR_CODE;
  message: string;
}

export interface getContext_Homepage_data_logo {
  __typename: "File";
  name: string;
  uri: string;
  owner: string;
}

export interface getContext_Homepage_data_partnerFooter {
  __typename: "File";
  name: string;
  uri: string;
  owner: string;
}

export interface getContext_Homepage_data_logoTop {
  __typename: "File";
  name: string;
  uri: string;
  owner: string;
}

export interface getContext_Homepage_data_logoBottom {
  __typename: "File";
  name: string;
  uri: string;
  owner: string;
}

export interface getContext_Homepage_data_bannerA_img {
  __typename: "File";
  name: string;
  uri: string;
  owner: string;
}

export interface getContext_Homepage_data_bannerA {
  __typename: "Banner";
  img: getContext_Homepage_data_bannerA_img | null;
  link: string;
  target: string;
  use: boolean;
}

export interface getContext_Homepage_data_bannerB_img {
  __typename: "File";
  name: string;
  uri: string;
  owner: string;
}

export interface getContext_Homepage_data_bannerB {
  __typename: "Banner";
  img: getContext_Homepage_data_bannerB_img | null;
  link: string;
  target: string;
  use: boolean;
}

export interface getContext_Homepage_data_bankInfo {
  __typename: "BankInfo";
  accountHolder: string | null;
  accountNumber: string | null;
  bankName: string | null;
}

export interface getContext_Homepage_data_modal {
  __typename: "Modal";
  _id: string;
  link: string | null;
  startDate: any;
  endDate: any;
  content: string | null;
  linkBehavior: LinkBehavior | null;
  style: any;
  title: string;
  priority: number | null;
  createdAt: any;
  open: boolean;
}

export interface getContext_Homepage_data {
  __typename: "Homepage";
  logo: getContext_Homepage_data_logo | null;
  address: string;
  addressUrl: string;
  siteDesc: string;
  siteKeyWards: string[];
  contact: string;
  siteName: string;
  signUpRedirect: string;
  blacklist: string[];
  partnerFooter: getContext_Homepage_data_partnerFooter[] | null;
  productSamples: string[];
  instaLink: string | null;
  blogLink: string | null;
  facebookLink: string | null;
  twitterLink: string | null;
  busiNumber: string;
  email: string;
  ceoName: string;
  /**
   * 영업시간
   */
  openTime: string;
  loginRedirect: string;
  loginOutRedirect: string;
  PrivacyPolicy: string;
  partnerBpolicy: string;
  usePolicy: string;
  travelerPolicy: string;
  partnerPolicy: string;
  marketingPolic: string;
  logoTop: getContext_Homepage_data_logoTop | null;
  logoBottom: getContext_Homepage_data_logoBottom | null;
  bannerA: getContext_Homepage_data_bannerA;
  bannerB: getContext_Homepage_data_bannerB;
  /**
   * 통신판매 번호
   */
  degitalSalesNumber: string | null;
  copyRight: string | null;
  bankInfo: getContext_Homepage_data_bankInfo | null;
  thirdPolicy: string;
  modal: getContext_Homepage_data_modal[];
}

export interface getContext_Homepage {
  __typename: "HomepageResponse";
  ok: boolean;
  error: getContext_Homepage_error | null;
  data: getContext_Homepage_data | null;
}

export interface getContext {
  GetProfile: getContext_GetProfile;
  GroupList: getContext_GroupList;
  CategoryList: getContext_CategoryList;
  Homepage: getContext_Homepage;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: questionList
// ====================================================

export interface questionList_QuestionList_error {
  __typename: "CustomError";
  location: string;
  severity: ERR_SEVERITY;
  code: ERR_CODE;
  message: string;
}

export interface questionList_QuestionList_page {
  __typename: "Page";
  /**
   * 현재 페이지 번호
   */
  page: number;
  /**
   * 페이지당 문서 갯수
   */
  cntPerPage: number;
  /**
   * 페이지 총 갯수
   */
  totalPageSize: number;
  /**
   * 시작 페이지 번호
   */
  start_page_num: number;
  /**
   * 마지막 페이지 번호
   */
  end_page_num: number;
  /**
   * 이전(<<) 표시 여부
   */
  isPrev: boolean;
  /**
   * 다음(>>) 표시 여부
   */
  isNext: boolean;
  /**
   * 이전(<<) 클릭시 표시할 페이지 번호
   */
  prev_page_num: number;
  /**
   * 다음(>>) 클릭시 표시할 페이지 번호
   */
  next_page_num: number;
  /**
   * 총 갯수
   */
  totalCount: number;
  /**
   * 마지막 패이지의 갯수 (index계산 하는데 사용함)
   */
  remainder: number;
}

export interface questionList_QuestionList_data_answers_author_profileImg {
  __typename: "File";
  uri: string;
}

export interface questionList_QuestionList_data_answers_author {
  __typename: "User";
  _id: string;
  name: string;
  /**
   * 프로필 사진
   */
  profileImg: questionList_QuestionList_data_answers_author_profileImg | null;
}

export interface questionList_QuestionList_data_answers {
  __typename: "Answer";
  _id: string;
  createdAt: any;
  updatedAt: any;
  isDelete: boolean;
  content: string;
  author: questionList_QuestionList_data_answers_author;
}

export interface questionList_QuestionList_data_attachFiles {
  __typename: "File";
  name: string;
  uri: string;
  owner: string;
}

export interface questionList_QuestionList_data_thumb {
  __typename: "File";
  name: string;
  uri: string;
  owner: string;
}

export interface questionList_QuestionList_data_author_busiRegistration {
  __typename: "File";
  name: string;
  uri: string;
  owner: string;
}

export interface questionList_QuestionList_data_author_profileImg {
  __typename: "File";
  uri: string;
}

export interface questionList_QuestionList_data_author_guideLicense {
  __typename: "File";
  name: string;
  uri: string;
  owner: string;
}

export interface questionList_QuestionList_data_author_guideLicenses {
  __typename: "File";
  name: string;
  uri: string;
  owner: string;
}

export interface questionList_QuestionList_data_author_bankImg {
  __typename: "File";
  name: string;
  uri: string;
  owner: string;
}

export interface questionList_QuestionList_data_author {
  __typename: "User";
  _id: string;
  /**
   * 닉네임 유니크
   */
  nickName: string;
  createdAt: any;
  updatedAt: any;
  isDelete: boolean;
  email: string;
  /**
   * 담당자명
   */
  manageName: string;
  connectionCount: number;
  role: UserRole;
  brith_date: string;
  address: string;
  address_detail: string;
  acceptSms: boolean;
  status: UserStatus;
  acceptEamil: boolean;
  /**
   * 매니저에 의한 회원가입 거절
   */
  isDenied: boolean | null;
  is_froreginer: boolean;
  /**
   * 기업 전화번호
   */
  busi_contact: string;
  /**
   * 담당자 연락처
   */
  manageContact: string;
  resignDate: any | null;
  gender: GENDER;
  busi_num: string;
  /**
   * 회원가입 거절 사유
   */
  denyReason: string | null;
  /**
   * 부서명
   */
  busi_department: string;
  isVerifiedManager: boolean;
  isVerifiedPhoneNumber: boolean;
  /**
   * 사업자 등록증
   */
  busiRegistration: questionList_QuestionList_data_author_busiRegistration | null;
  /**
   * 개인 법인인지 아닌지 체크함 True = 법인
   */
  is_priv_corper: boolean;
  /**
   * 사업자명
   */
  busi_name: string;
  busi_address: string;
  account_number: string;
  name: string;
  bank_name: string;
  resignReason: string | null;
  resignReasonType: string | null;
  isResigned: boolean | null;
  phoneNumber: string;
  /**
   * 프로필 사진
   */
  profileImg: questionList_QuestionList_data_author_profileImg | null;
  /**
   * 가이드 자격증
   */
  guideLicense: questionList_QuestionList_data_author_guideLicense | null;
  /**
   * 가이드 자격증들
   */
  guideLicenses: questionList_QuestionList_data_author_guideLicenses[] | null;
  /**
   * 주력언어
   */
  lang: Lang;
  /**
   * 통장사본
   */
  bankImg: questionList_QuestionList_data_author_bankImg | null;
}

export interface questionList_QuestionList_data_product_author {
  __typename: "User";
  _id: string;
  name: string;
  /**
   * 닉네임 유니크
   */
  nickName: string;
}

export interface questionList_QuestionList_data_product {
  __typename: "Product";
  _id: string;
  title: string;
  author: questionList_QuestionList_data_product_author | null;
}

export interface questionList_QuestionList_data {
  __typename: "Question";
  _id: string;
  createdAt: any;
  updatedAt: any;
  isDelete: boolean;
  title: string;
  contents: string;
  code: string;
  isNotice: boolean | null;
  isOpen: boolean | null;
  summary: string | null;
  subTitle: string | null;
  status: QuestionStatus;
  answers: questionList_QuestionList_data_answers[] | null;
  keyWards: string[] | null;
  attachFiles: questionList_QuestionList_data_attachFiles[] | null;
  thumb: questionList_QuestionList_data_thumb | null;
  viewCount: number;
  likeCount: number;
  no: number;
  author: questionList_QuestionList_data_author | null;
  product: questionList_QuestionList_data_product | null;
}

export interface questionList_QuestionList {
  __typename: "QuestionListResponse";
  ok: boolean;
  error: questionList_QuestionList_error | null;
  page: questionList_QuestionList_page;
  data: questionList_QuestionList_data[];
}

export interface questionList {
  QuestionList: questionList_QuestionList;
}

export interface questionListVariables {
  sort?: _QuestionSort[] | null;
  filter?: _QuestionFilter | null;
  pageInput: pageInput;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: questionCreate
// ====================================================

export interface questionCreate_QuestionCreate_error {
  __typename: "CustomError";
  location: string;
  severity: ERR_SEVERITY;
  code: ERR_CODE;
  message: string;
}

export interface questionCreate_QuestionCreate_data {
  __typename: "Question";
  _id: string;
}

export interface questionCreate_QuestionCreate {
  __typename: "QuestionCreateResponse";
  ok: boolean;
  error: questionCreate_QuestionCreate_error | null;
  data: questionCreate_QuestionCreate_data | null;
}

export interface questionCreate {
  QuestionCreate: questionCreate_QuestionCreate;
}

export interface questionCreateVariables {
  params: QuestionCreateInput;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: questionDelete
// ====================================================

export interface questionDelete_QuestionDelete_error {
  __typename: "CustomError";
  location: string;
  severity: ERR_SEVERITY;
  code: ERR_CODE;
  message: string;
}

export interface questionDelete_QuestionDelete {
  __typename: "QuestionDeleteResponse";
  ok: boolean;
  error: questionDelete_QuestionDelete_error | null;
}

export interface questionDelete {
  QuestionDelete: questionDelete_QuestionDelete;
}

export interface questionDeleteVariables {
  id: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: questionUpdate
// ====================================================

export interface questionUpdate_QuestionUpdate_error {
  __typename: "CustomError";
  location: string;
  severity: ERR_SEVERITY;
  code: ERR_CODE;
  message: string;
}

export interface questionUpdate_QuestionUpdate_data {
  __typename: "Question";
  _id: string;
}

export interface questionUpdate_QuestionUpdate {
  __typename: "QuestionUpdateResponse";
  ok: boolean;
  error: questionUpdate_QuestionUpdate_error | null;
  data: questionUpdate_QuestionUpdate_data | null;
}

export interface questionUpdate {
  QuestionUpdate: questionUpdate_QuestionUpdate;
}

export interface questionUpdateVariables {
  params: QuestionUpdateInput;
  id: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: questionFindById
// ====================================================

export interface questionFindById_QuestionFindById_error {
  __typename: "CustomError";
  location: string;
  severity: ERR_SEVERITY;
  code: ERR_CODE;
  message: string;
}

export interface questionFindById_QuestionFindById_data_answers_author_profileImg {
  __typename: "File";
  uri: string;
}

export interface questionFindById_QuestionFindById_data_answers_author {
  __typename: "User";
  _id: string;
  name: string;
  /**
   * 프로필 사진
   */
  profileImg: questionFindById_QuestionFindById_data_answers_author_profileImg | null;
}

export interface questionFindById_QuestionFindById_data_answers {
  __typename: "Answer";
  _id: string;
  createdAt: any;
  updatedAt: any;
  isDelete: boolean;
  content: string;
  author: questionFindById_QuestionFindById_data_answers_author;
}

export interface questionFindById_QuestionFindById_data_attachFiles {
  __typename: "File";
  name: string;
  uri: string;
  owner: string;
}

export interface questionFindById_QuestionFindById_data_thumb {
  __typename: "File";
  name: string;
  uri: string;
  owner: string;
}

export interface questionFindById_QuestionFindById_data_author_busiRegistration {
  __typename: "File";
  name: string;
  uri: string;
  owner: string;
}

export interface questionFindById_QuestionFindById_data_author_profileImg {
  __typename: "File";
  uri: string;
}

export interface questionFindById_QuestionFindById_data_author_guideLicense {
  __typename: "File";
  name: string;
  uri: string;
  owner: string;
}

export interface questionFindById_QuestionFindById_data_author_guideLicenses {
  __typename: "File";
  name: string;
  uri: string;
  owner: string;
}

export interface questionFindById_QuestionFindById_data_author_bankImg {
  __typename: "File";
  name: string;
  uri: string;
  owner: string;
}

export interface questionFindById_QuestionFindById_data_author {
  __typename: "User";
  _id: string;
  /**
   * 닉네임 유니크
   */
  nickName: string;
  createdAt: any;
  updatedAt: any;
  isDelete: boolean;
  email: string;
  /**
   * 담당자명
   */
  manageName: string;
  connectionCount: number;
  role: UserRole;
  brith_date: string;
  address: string;
  address_detail: string;
  acceptSms: boolean;
  status: UserStatus;
  acceptEamil: boolean;
  /**
   * 매니저에 의한 회원가입 거절
   */
  isDenied: boolean | null;
  is_froreginer: boolean;
  /**
   * 기업 전화번호
   */
  busi_contact: string;
  /**
   * 담당자 연락처
   */
  manageContact: string;
  resignDate: any | null;
  gender: GENDER;
  busi_num: string;
  /**
   * 회원가입 거절 사유
   */
  denyReason: string | null;
  /**
   * 부서명
   */
  busi_department: string;
  isVerifiedManager: boolean;
  isVerifiedPhoneNumber: boolean;
  /**
   * 사업자 등록증
   */
  busiRegistration: questionFindById_QuestionFindById_data_author_busiRegistration | null;
  /**
   * 개인 법인인지 아닌지 체크함 True = 법인
   */
  is_priv_corper: boolean;
  /**
   * 사업자명
   */
  busi_name: string;
  busi_address: string;
  account_number: string;
  name: string;
  bank_name: string;
  resignReason: string | null;
  resignReasonType: string | null;
  isResigned: boolean | null;
  phoneNumber: string;
  /**
   * 프로필 사진
   */
  profileImg: questionFindById_QuestionFindById_data_author_profileImg | null;
  /**
   * 가이드 자격증
   */
  guideLicense: questionFindById_QuestionFindById_data_author_guideLicense | null;
  /**
   * 가이드 자격증들
   */
  guideLicenses: questionFindById_QuestionFindById_data_author_guideLicenses[] | null;
  /**
   * 주력언어
   */
  lang: Lang;
  /**
   * 통장사본
   */
  bankImg: questionFindById_QuestionFindById_data_author_bankImg | null;
}

export interface questionFindById_QuestionFindById_data_product_author {
  __typename: "User";
  _id: string;
  name: string;
  /**
   * 닉네임 유니크
   */
  nickName: string;
}

export interface questionFindById_QuestionFindById_data_product {
  __typename: "Product";
  _id: string;
  title: string;
  author: questionFindById_QuestionFindById_data_product_author | null;
}

export interface questionFindById_QuestionFindById_data {
  __typename: "Question";
  _id: string;
  createdAt: any;
  updatedAt: any;
  isDelete: boolean;
  title: string;
  contents: string;
  code: string;
  isNotice: boolean | null;
  isOpen: boolean | null;
  summary: string | null;
  subTitle: string | null;
  status: QuestionStatus;
  answers: questionFindById_QuestionFindById_data_answers[] | null;
  keyWards: string[] | null;
  attachFiles: questionFindById_QuestionFindById_data_attachFiles[] | null;
  thumb: questionFindById_QuestionFindById_data_thumb | null;
  viewCount: number;
  likeCount: number;
  no: number;
  author: questionFindById_QuestionFindById_data_author | null;
  product: questionFindById_QuestionFindById_data_product | null;
}

export interface questionFindById_QuestionFindById {
  __typename: "QuestionFindByIdResponse";
  ok: boolean;
  error: questionFindById_QuestionFindById_error | null;
  data: questionFindById_QuestionFindById_data | null;
}

export interface questionFindById {
  QuestionFindById: questionFindById_QuestionFindById;
}

export interface questionFindByIdVariables {
  id: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: productReviewFindById
// ====================================================

export interface productReviewFindById_ProductReviewFindById_error {
  __typename: "CustomError";
  location: string;
  severity: ERR_SEVERITY;
  code: ERR_CODE;
  message: string;
}

export interface productReviewFindById_ProductReviewFindById_data_answers_author_profileImg {
  __typename: "File";
  uri: string;
}

export interface productReviewFindById_ProductReviewFindById_data_answers_author {
  __typename: "User";
  _id: string;
  name: string;
  /**
   * 프로필 사진
   */
  profileImg: productReviewFindById_ProductReviewFindById_data_answers_author_profileImg | null;
}

export interface productReviewFindById_ProductReviewFindById_data_answers {
  __typename: "Answer";
  _id: string;
  createdAt: any;
  updatedAt: any;
  isDelete: boolean;
  content: string;
  author: productReviewFindById_ProductReviewFindById_data_answers_author;
}

export interface productReviewFindById_ProductReviewFindById_data_author_busiRegistration {
  __typename: "File";
  name: string;
  uri: string;
  owner: string;
}

export interface productReviewFindById_ProductReviewFindById_data_author_profileImg {
  __typename: "File";
  uri: string;
}

export interface productReviewFindById_ProductReviewFindById_data_author_guideLicense {
  __typename: "File";
  name: string;
  uri: string;
  owner: string;
}

export interface productReviewFindById_ProductReviewFindById_data_author_guideLicenses {
  __typename: "File";
  name: string;
  uri: string;
  owner: string;
}

export interface productReviewFindById_ProductReviewFindById_data_author_bankImg {
  __typename: "File";
  name: string;
  uri: string;
  owner: string;
}

export interface productReviewFindById_ProductReviewFindById_data_author {
  __typename: "User";
  _id: string;
  /**
   * 닉네임 유니크
   */
  nickName: string;
  createdAt: any;
  updatedAt: any;
  isDelete: boolean;
  email: string;
  /**
   * 담당자명
   */
  manageName: string;
  connectionCount: number;
  role: UserRole;
  brith_date: string;
  address: string;
  address_detail: string;
  acceptSms: boolean;
  status: UserStatus;
  acceptEamil: boolean;
  /**
   * 매니저에 의한 회원가입 거절
   */
  isDenied: boolean | null;
  is_froreginer: boolean;
  /**
   * 기업 전화번호
   */
  busi_contact: string;
  /**
   * 담당자 연락처
   */
  manageContact: string;
  resignDate: any | null;
  gender: GENDER;
  busi_num: string;
  /**
   * 회원가입 거절 사유
   */
  denyReason: string | null;
  /**
   * 부서명
   */
  busi_department: string;
  isVerifiedManager: boolean;
  isVerifiedPhoneNumber: boolean;
  /**
   * 사업자 등록증
   */
  busiRegistration: productReviewFindById_ProductReviewFindById_data_author_busiRegistration | null;
  /**
   * 개인 법인인지 아닌지 체크함 True = 법인
   */
  is_priv_corper: boolean;
  /**
   * 사업자명
   */
  busi_name: string;
  busi_address: string;
  account_number: string;
  name: string;
  bank_name: string;
  resignReason: string | null;
  resignReasonType: string | null;
  isResigned: boolean | null;
  phoneNumber: string;
  /**
   * 프로필 사진
   */
  profileImg: productReviewFindById_ProductReviewFindById_data_author_profileImg | null;
  /**
   * 가이드 자격증
   */
  guideLicense: productReviewFindById_ProductReviewFindById_data_author_guideLicense | null;
  /**
   * 가이드 자격증들
   */
  guideLicenses: productReviewFindById_ProductReviewFindById_data_author_guideLicenses[] | null;
  /**
   * 주력언어
   */
  lang: Lang;
  /**
   * 통장사본
   */
  bankImg: productReviewFindById_ProductReviewFindById_data_author_bankImg | null;
}

export interface productReviewFindById_ProductReviewFindById_data_attachFiles {
  __typename: "File";
  name: string;
  uri: string;
  owner: string;
}

export interface productReviewFindById_ProductReviewFindById_data {
  __typename: "ProductReview";
  answers: productReviewFindById_ProductReviewFindById_data_answers[] | null;
  _id: string;
  createdAt: any;
  updatedAt: any;
  isDelete: boolean;
  title: string;
  contents: string;
  author: productReviewFindById_ProductReviewFindById_data_author | null;
  num: number;
  boardTypeName: string | null;
  isNotice: boolean | null;
  isOpen: boolean | null;
  summary: string | null;
  subTitle: string | null;
  keyWards: string[] | null;
  viewCount: number;
  likeCount: number;
  slug: string;
  authorName: string;
  productName: string;
  attachFiles: productReviewFindById_ProductReviewFindById_data_attachFiles[] | null;
  productAuthorName: string;
  productAuthorId: string;
  productCode: string;
  groupCode: string;
  rating: number;
}

export interface productReviewFindById_ProductReviewFindById {
  __typename: "ProductReviewFindByIdResponse";
  ok: boolean;
  error: productReviewFindById_ProductReviewFindById_error | null;
  data: productReviewFindById_ProductReviewFindById_data | null;
  nextId: string | null;
  beforeId: string | null;
}

export interface productReviewFindById {
  ProductReviewFindById: productReviewFindById_ProductReviewFindById;
}

export interface productReviewFindByIdVariables {
  id: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: productreviewList
// ====================================================

export interface productreviewList_ProductReviewList_error {
  __typename: "CustomError";
  location: string;
  severity: ERR_SEVERITY;
  code: ERR_CODE;
  message: string;
}

export interface productreviewList_ProductReviewList_page {
  __typename: "Page";
  /**
   * 현재 페이지 번호
   */
  page: number;
  /**
   * 페이지당 문서 갯수
   */
  cntPerPage: number;
  /**
   * 페이지 총 갯수
   */
  totalPageSize: number;
  /**
   * 시작 페이지 번호
   */
  start_page_num: number;
  /**
   * 마지막 페이지 번호
   */
  end_page_num: number;
  /**
   * 이전(<<) 표시 여부
   */
  isPrev: boolean;
  /**
   * 다음(>>) 표시 여부
   */
  isNext: boolean;
  /**
   * 이전(<<) 클릭시 표시할 페이지 번호
   */
  prev_page_num: number;
  /**
   * 다음(>>) 클릭시 표시할 페이지 번호
   */
  next_page_num: number;
  /**
   * 총 갯수
   */
  totalCount: number;
  /**
   * 마지막 패이지의 갯수 (index계산 하는데 사용함)
   */
  remainder: number;
}

export interface productreviewList_ProductReviewList_data_author_busiRegistration {
  __typename: "File";
  name: string;
  uri: string;
  owner: string;
}

export interface productreviewList_ProductReviewList_data_author_profileImg {
  __typename: "File";
  uri: string;
}

export interface productreviewList_ProductReviewList_data_author_guideLicense {
  __typename: "File";
  name: string;
  uri: string;
  owner: string;
}

export interface productreviewList_ProductReviewList_data_author_guideLicenses {
  __typename: "File";
  name: string;
  uri: string;
  owner: string;
}

export interface productreviewList_ProductReviewList_data_author_bankImg {
  __typename: "File";
  name: string;
  uri: string;
  owner: string;
}

export interface productreviewList_ProductReviewList_data_author {
  __typename: "User";
  _id: string;
  /**
   * 닉네임 유니크
   */
  nickName: string;
  createdAt: any;
  updatedAt: any;
  isDelete: boolean;
  email: string;
  /**
   * 담당자명
   */
  manageName: string;
  connectionCount: number;
  role: UserRole;
  brith_date: string;
  address: string;
  address_detail: string;
  acceptSms: boolean;
  status: UserStatus;
  acceptEamil: boolean;
  /**
   * 매니저에 의한 회원가입 거절
   */
  isDenied: boolean | null;
  is_froreginer: boolean;
  /**
   * 기업 전화번호
   */
  busi_contact: string;
  /**
   * 담당자 연락처
   */
  manageContact: string;
  resignDate: any | null;
  gender: GENDER;
  busi_num: string;
  /**
   * 회원가입 거절 사유
   */
  denyReason: string | null;
  /**
   * 부서명
   */
  busi_department: string;
  isVerifiedManager: boolean;
  isVerifiedPhoneNumber: boolean;
  /**
   * 사업자 등록증
   */
  busiRegistration: productreviewList_ProductReviewList_data_author_busiRegistration | null;
  /**
   * 개인 법인인지 아닌지 체크함 True = 법인
   */
  is_priv_corper: boolean;
  /**
   * 사업자명
   */
  busi_name: string;
  busi_address: string;
  account_number: string;
  name: string;
  bank_name: string;
  resignReason: string | null;
  resignReasonType: string | null;
  isResigned: boolean | null;
  phoneNumber: string;
  /**
   * 프로필 사진
   */
  profileImg: productreviewList_ProductReviewList_data_author_profileImg | null;
  /**
   * 가이드 자격증
   */
  guideLicense: productreviewList_ProductReviewList_data_author_guideLicense | null;
  /**
   * 가이드 자격증들
   */
  guideLicenses: productreviewList_ProductReviewList_data_author_guideLicenses[] | null;
  /**
   * 주력언어
   */
  lang: Lang;
  /**
   * 통장사본
   */
  bankImg: productreviewList_ProductReviewList_data_author_bankImg | null;
}

export interface productreviewList_ProductReviewList_data_attachFiles {
  __typename: "File";
  name: string;
  uri: string;
  owner: string;
}

export interface productreviewList_ProductReviewList_data {
  __typename: "ProductReview";
  _id: string;
  createdAt: any;
  updatedAt: any;
  isDelete: boolean;
  title: string;
  contents: string;
  author: productreviewList_ProductReviewList_data_author | null;
  num: number;
  boardTypeName: string | null;
  isNotice: boolean | null;
  isOpen: boolean | null;
  summary: string | null;
  subTitle: string | null;
  keyWards: string[] | null;
  viewCount: number;
  likeCount: number;
  slug: string;
  authorName: string;
  productName: string;
  attachFiles: productreviewList_ProductReviewList_data_attachFiles[] | null;
  productAuthorName: string;
  productAuthorId: string;
  productCode: string;
  groupCode: string;
  rating: number;
}

export interface productreviewList_ProductReviewList {
  __typename: "ProductReviewListResponse";
  ok: boolean;
  error: productreviewList_ProductReviewList_error | null;
  page: productreviewList_ProductReviewList_page;
  data: productreviewList_ProductReviewList_data[];
}

export interface productreviewList {
  ProductReviewList: productreviewList_ProductReviewList;
}

export interface productreviewListVariables {
  sort?: _ProductReviewSort[] | null;
  filter?: _ProductReviewFilter | null;
  pageInput: pageInput;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: productreviewCreate
// ====================================================

export interface productreviewCreate_ProductReviewCreate_error {
  __typename: "CustomError";
  location: string;
  severity: ERR_SEVERITY;
  code: ERR_CODE;
  message: string;
}

export interface productreviewCreate_ProductReviewCreate_data {
  __typename: "ProductReview";
  _id: string;
}

export interface productreviewCreate_ProductReviewCreate {
  __typename: "ProductReviewCreateResponse";
  ok: boolean;
  error: productreviewCreate_ProductReviewCreate_error | null;
  data: productreviewCreate_ProductReviewCreate_data | null;
}

export interface productreviewCreate {
  ProductReviewCreate: productreviewCreate_ProductReviewCreate;
}

export interface productreviewCreateVariables {
  params: ProductReviewCreateInput;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: productreviewDelete
// ====================================================

export interface productreviewDelete_ProductReviewDelete_error {
  __typename: "CustomError";
  location: string;
  severity: ERR_SEVERITY;
  code: ERR_CODE;
  message: string;
}

export interface productreviewDelete_ProductReviewDelete {
  __typename: "ProductReviewDeleteResponse";
  ok: boolean;
  error: productreviewDelete_ProductReviewDelete_error | null;
}

export interface productreviewDelete {
  ProductReviewDelete: productreviewDelete_ProductReviewDelete;
}

export interface productreviewDeleteVariables {
  id: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: productreviewUpdate
// ====================================================

export interface productreviewUpdate_ProductReviewUpdate_error {
  __typename: "CustomError";
  location: string;
  severity: ERR_SEVERITY;
  code: ERR_CODE;
  message: string;
}

export interface productreviewUpdate_ProductReviewUpdate_data {
  __typename: "ProductReview";
  _id: string;
}

export interface productreviewUpdate_ProductReviewUpdate {
  __typename: "ProductReviewUpdateResponse";
  ok: boolean;
  error: productreviewUpdate_ProductReviewUpdate_error | null;
  data: productreviewUpdate_ProductReviewUpdate_data | null;
}

export interface productreviewUpdate {
  ProductReviewUpdate: productreviewUpdate_ProductReviewUpdate;
}

export interface productreviewUpdateVariables {
  params: ProductReviewUpdateInput;
  id: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: settlementFindById
// ====================================================

export interface settlementFindById_SettlementFindById_error {
  __typename: "CustomError";
  location: string;
  severity: ERR_SEVERITY;
  code: ERR_CODE;
  message: string;
}

export interface settlementFindById_SettlementFindById_data_requestHistory {
  __typename: "RequestHistory";
  methodType: MethodType;
  reqType: RequestStatus;
  date: any;
  reason: string;
}

export interface settlementFindById_SettlementFindById_data_product_region {
  __typename: "Category";
  label: string;
  _id: string;
}

export interface settlementFindById_SettlementFindById_data_product_category {
  __typename: "Category";
  _id: string;
  label: string;
}

export interface settlementFindById_SettlementFindById_data_product_bookerSummary {
  __typename: "BookerSummary";
  adultCount: number;
  babyCount: number;
  kidsCount: number;
  completeBookCount: number;
  readyBookCount: number;
  cancelBookCount: number;
}

export interface settlementFindById_SettlementFindById_data_product_itinerary_images {
  __typename: "File";
  name: string;
  uri: string;
  owner: string;
}

export interface settlementFindById_SettlementFindById_data_product_itinerary {
  __typename: "Itinerary";
  _id: string;
  createdAt: any;
  updatedAt: any;
  isDelete: boolean;
  title: string;
  contents: string[];
  images: settlementFindById_SettlementFindById_data_product_itinerary_images[];
  date: any;
}

export interface settlementFindById_SettlementFindById_data_product_images {
  __typename: "File";
  name: string;
  uri: string;
  owner: string;
}

export interface settlementFindById_SettlementFindById_data_product_thumb {
  __typename: "File";
  uri: string;
}

export interface settlementFindById_SettlementFindById_data_product_author_busiRegistration {
  __typename: "File";
  name: string;
  uri: string;
  owner: string;
}

export interface settlementFindById_SettlementFindById_data_product_author_profileImg {
  __typename: "File";
  uri: string;
}

export interface settlementFindById_SettlementFindById_data_product_author_guideLicense {
  __typename: "File";
  name: string;
  uri: string;
  owner: string;
}

export interface settlementFindById_SettlementFindById_data_product_author_guideLicenses {
  __typename: "File";
  name: string;
  uri: string;
  owner: string;
}

export interface settlementFindById_SettlementFindById_data_product_author_bankImg {
  __typename: "File";
  name: string;
  uri: string;
  owner: string;
}

export interface settlementFindById_SettlementFindById_data_product_author {
  __typename: "User";
  _id: string;
  /**
   * 닉네임 유니크
   */
  nickName: string;
  createdAt: any;
  updatedAt: any;
  isDelete: boolean;
  email: string;
  /**
   * 담당자명
   */
  manageName: string;
  connectionCount: number;
  role: UserRole;
  brith_date: string;
  address: string;
  address_detail: string;
  acceptSms: boolean;
  status: UserStatus;
  acceptEamil: boolean;
  /**
   * 매니저에 의한 회원가입 거절
   */
  isDenied: boolean | null;
  is_froreginer: boolean;
  /**
   * 기업 전화번호
   */
  busi_contact: string;
  /**
   * 담당자 연락처
   */
  manageContact: string;
  resignDate: any | null;
  gender: GENDER;
  busi_num: string;
  /**
   * 회원가입 거절 사유
   */
  denyReason: string | null;
  /**
   * 부서명
   */
  busi_department: string;
  isVerifiedManager: boolean;
  isVerifiedPhoneNumber: boolean;
  /**
   * 사업자 등록증
   */
  busiRegistration: settlementFindById_SettlementFindById_data_product_author_busiRegistration | null;
  /**
   * 개인 법인인지 아닌지 체크함 True = 법인
   */
  is_priv_corper: boolean;
  /**
   * 사업자명
   */
  busi_name: string;
  busi_address: string;
  account_number: string;
  name: string;
  bank_name: string;
  resignReason: string | null;
  resignReasonType: string | null;
  isResigned: boolean | null;
  phoneNumber: string;
  /**
   * 프로필 사진
   */
  profileImg: settlementFindById_SettlementFindById_data_product_author_profileImg | null;
  /**
   * 가이드 자격증
   */
  guideLicense: settlementFindById_SettlementFindById_data_product_author_guideLicense | null;
  /**
   * 가이드 자격증들
   */
  guideLicenses: settlementFindById_SettlementFindById_data_product_author_guideLicenses[] | null;
  /**
   * 주력언어
   */
  lang: Lang;
  /**
   * 통장사본
   */
  bankImg: settlementFindById_SettlementFindById_data_product_author_bankImg | null;
}

export interface settlementFindById_SettlementFindById_data_product_bookings_payment_history {
  __typename: "TxHistory";
  status: string;
  price: number;
  metadata: any | null;
  createdAt: any;
  updatedAt: any;
}

export interface settlementFindById_SettlementFindById_data_product_bookings_payment {
  __typename: "Payment";
  _id: string;
  createdAt: any;
  updatedAt: any;
  isDelete: boolean;
  payMethod: PayMethod;
  status: PaymentStatus;
  price: number;
  totalCancelPrice: number;
  cancelDate: any | null;
  isPartialCancel: number;
  groupCode: string | null;
  history: settlementFindById_SettlementFindById_data_product_bookings_payment_history[];
}

export interface settlementFindById_SettlementFindById_data_product_bookings {
  __typename: "Booking";
  _id: string;
  createdAt: any;
  cancelDate: any | null;
  gender: GENDER | null;
  age: string | null;
  payMethod: PayMethod;
  updatedAt: any;
  isDelete: boolean;
  leftTime: number;
  adultCount: number;
  kidCount: number;
  cancelMemo: string | null;
  babyCount: number;
  totalCount: number;
  message: string | null;
  isCancelRequest: boolean | null;
  bookerInclue: boolean;
  bookingPrice: number;
  status: BookingStatus | null;
  isMember: boolean | null;
  memo: string | null;
  code: string;
  groupCode: string;
  name: string;
  email: string;
  phoneNumber: string;
  /**
   * 결제가 되었는지
   */
  isPaid: boolean | null;
  payment: settlementFindById_SettlementFindById_data_product_bookings_payment | null;
}

export interface settlementFindById_SettlementFindById_data_product {
  __typename: "Product";
  _id: string;
  createdAt: any;
  updatedAt: any;
  regionLabel: string | null;
  isDelete: boolean;
  title: string;
  code: string;
  lang: Lang;
  /**
   * 취소를 제외한 상품 하나에 대한 모든 인원
   */
  peopleCount: number;
  contents: string;
  determined: boolean;
  endDate: any;
  dateRange: number;
  adminMemo: string;
  groupCode: string;
  region: settlementFindById_SettlementFindById_data_product_region | null;
  category: settlementFindById_SettlementFindById_data_product_category | null;
  /**
   * 예약인원에 대한 요약
   */
  bookerSummary: settlementFindById_SettlementFindById_data_product_bookerSummary;
  status: ProductStatus;
  itinerary: settlementFindById_SettlementFindById_data_product_itinerary[];
  inOrNor: string;
  info: string;
  caution: string | null;
  images: settlementFindById_SettlementFindById_data_product_images[] | null;
  keyWards: string[] | null;
  address: string;
  thumb: settlementFindById_SettlementFindById_data_product_thumb | null;
  startPoint: string;
  maxMember: number;
  minMember: number;
  /**
   * 유저가 업데이트 요청을 했을때 어떤 변경이였는지 메모
   */
  requestMemo: string;
  subTitle: string | null;
  adult_price: number;
  bookingCount: number;
  kids_price: number;
  /**
   * 상품 하나에 대한 결제완료된 예약 총 인원
   */
  compeltePeopleCnt: number;
  baby_price: number;
  isNotice: boolean | null;
  elseReq: ProductReOpenReq | null;
  isOpen: boolean | null;
  type: ProductType;
  startDate: any;
  Dday: number;
  author: settlementFindById_SettlementFindById_data_product_author | null;
  bookings: settlementFindById_SettlementFindById_data_product_bookings[];
}

export interface settlementFindById_SettlementFindById_data {
  __typename: "Settlement";
  requestHistory: settlementFindById_SettlementFindById_data_requestHistory[];
  _id: string;
  createdAt: any;
  updatedAt: any;
  isDelete: boolean;
  status: SettlementStatus;
  totalPrice: number;
  cardPrice: number;
  bankPrice: number;
  settlementPrice: number;
  totalFee: number;
  cardFee: number;
  niceCardFee: number;
  jandaCardFee: number;
  bankFee: number;
  additionFeeSum: number;
  jandaFee: number;
  cancelReturnPriceTotal: number;
  cancelReturnPrice: number;
  reserveDiffPrice: number[];
  reserveDiffPriceTotal: number;
  payReqPrice: number;
  requestDate: any | null;
  acceptDate: any | null;
  completeDate: any | null;
  cancelDate: any | null;
  product: settlementFindById_SettlementFindById_data_product;
}

export interface settlementFindById_SettlementFindById {
  __typename: "SettlementFindByIdResponse";
  ok: boolean;
  error: settlementFindById_SettlementFindById_error | null;
  data: settlementFindById_SettlementFindById_data | null;
}

export interface settlementFindById {
  SettlementFindById: settlementFindById_SettlementFindById;
}

export interface settlementFindByIdVariables {
  _id: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: settlementList
// ====================================================

export interface settlementList_SettlementList_error {
  __typename: "CustomError";
  location: string;
  severity: ERR_SEVERITY;
  code: ERR_CODE;
  message: string;
}

export interface settlementList_SettlementList_page {
  __typename: "Page";
  /**
   * 현재 페이지 번호
   */
  page: number;
  /**
   * 페이지당 문서 갯수
   */
  cntPerPage: number;
  /**
   * 페이지 총 갯수
   */
  totalPageSize: number;
  /**
   * 시작 페이지 번호
   */
  start_page_num: number;
  /**
   * 마지막 페이지 번호
   */
  end_page_num: number;
  /**
   * 이전(<<) 표시 여부
   */
  isPrev: boolean;
  /**
   * 다음(>>) 표시 여부
   */
  isNext: boolean;
  /**
   * 이전(<<) 클릭시 표시할 페이지 번호
   */
  prev_page_num: number;
  /**
   * 다음(>>) 클릭시 표시할 페이지 번호
   */
  next_page_num: number;
  /**
   * 총 갯수
   */
  totalCount: number;
  /**
   * 마지막 패이지의 갯수 (index계산 하는데 사용함)
   */
  remainder: number;
}

export interface settlementList_SettlementList_data_seller_busiRegistration {
  __typename: "File";
  name: string;
  uri: string;
  owner: string;
}

export interface settlementList_SettlementList_data_seller_profileImg {
  __typename: "File";
  uri: string;
}

export interface settlementList_SettlementList_data_seller_guideLicense {
  __typename: "File";
  name: string;
  uri: string;
  owner: string;
}

export interface settlementList_SettlementList_data_seller_guideLicenses {
  __typename: "File";
  name: string;
  uri: string;
  owner: string;
}

export interface settlementList_SettlementList_data_seller_bankImg {
  __typename: "File";
  name: string;
  uri: string;
  owner: string;
}

export interface settlementList_SettlementList_data_seller {
  __typename: "User";
  _id: string;
  /**
   * 닉네임 유니크
   */
  nickName: string;
  createdAt: any;
  updatedAt: any;
  isDelete: boolean;
  email: string;
  /**
   * 담당자명
   */
  manageName: string;
  connectionCount: number;
  role: UserRole;
  brith_date: string;
  address: string;
  address_detail: string;
  acceptSms: boolean;
  status: UserStatus;
  acceptEamil: boolean;
  /**
   * 매니저에 의한 회원가입 거절
   */
  isDenied: boolean | null;
  is_froreginer: boolean;
  /**
   * 기업 전화번호
   */
  busi_contact: string;
  /**
   * 담당자 연락처
   */
  manageContact: string;
  resignDate: any | null;
  gender: GENDER;
  busi_num: string;
  /**
   * 회원가입 거절 사유
   */
  denyReason: string | null;
  /**
   * 부서명
   */
  busi_department: string;
  isVerifiedManager: boolean;
  isVerifiedPhoneNumber: boolean;
  /**
   * 사업자 등록증
   */
  busiRegistration: settlementList_SettlementList_data_seller_busiRegistration | null;
  /**
   * 개인 법인인지 아닌지 체크함 True = 법인
   */
  is_priv_corper: boolean;
  /**
   * 사업자명
   */
  busi_name: string;
  busi_address: string;
  account_number: string;
  name: string;
  bank_name: string;
  resignReason: string | null;
  resignReasonType: string | null;
  isResigned: boolean | null;
  phoneNumber: string;
  /**
   * 프로필 사진
   */
  profileImg: settlementList_SettlementList_data_seller_profileImg | null;
  /**
   * 가이드 자격증
   */
  guideLicense: settlementList_SettlementList_data_seller_guideLicense | null;
  /**
   * 가이드 자격증들
   */
  guideLicenses: settlementList_SettlementList_data_seller_guideLicenses[] | null;
  /**
   * 주력언어
   */
  lang: Lang;
  /**
   * 통장사본
   */
  bankImg: settlementList_SettlementList_data_seller_bankImg | null;
}

export interface settlementList_SettlementList_data_product_bookerSummary {
  __typename: "BookerSummary";
  adultCount: number;
  babyCount: number;
  kidsCount: number;
  completeBookCount: number;
  readyBookCount: number;
  cancelBookCount: number;
}

export interface settlementList_SettlementList_data_product_region {
  __typename: "Category";
  label: string;
  _id: string;
}

export interface settlementList_SettlementList_data_product_category {
  __typename: "Category";
  _id: string;
  label: string;
}

export interface settlementList_SettlementList_data_product_itinerary_images {
  __typename: "File";
  name: string;
  uri: string;
  owner: string;
}

export interface settlementList_SettlementList_data_product_itinerary {
  __typename: "Itinerary";
  _id: string;
  createdAt: any;
  updatedAt: any;
  isDelete: boolean;
  title: string;
  contents: string[];
  images: settlementList_SettlementList_data_product_itinerary_images[];
  date: any;
}

export interface settlementList_SettlementList_data_product_images {
  __typename: "File";
  name: string;
  uri: string;
  owner: string;
}

export interface settlementList_SettlementList_data_product_thumb {
  __typename: "File";
  uri: string;
}

export interface settlementList_SettlementList_data_product_author_busiRegistration {
  __typename: "File";
  name: string;
  uri: string;
  owner: string;
}

export interface settlementList_SettlementList_data_product_author_profileImg {
  __typename: "File";
  uri: string;
}

export interface settlementList_SettlementList_data_product_author_guideLicense {
  __typename: "File";
  name: string;
  uri: string;
  owner: string;
}

export interface settlementList_SettlementList_data_product_author_guideLicenses {
  __typename: "File";
  name: string;
  uri: string;
  owner: string;
}

export interface settlementList_SettlementList_data_product_author_bankImg {
  __typename: "File";
  name: string;
  uri: string;
  owner: string;
}

export interface settlementList_SettlementList_data_product_author {
  __typename: "User";
  _id: string;
  /**
   * 닉네임 유니크
   */
  nickName: string;
  createdAt: any;
  updatedAt: any;
  isDelete: boolean;
  email: string;
  /**
   * 담당자명
   */
  manageName: string;
  connectionCount: number;
  role: UserRole;
  brith_date: string;
  address: string;
  address_detail: string;
  acceptSms: boolean;
  status: UserStatus;
  acceptEamil: boolean;
  /**
   * 매니저에 의한 회원가입 거절
   */
  isDenied: boolean | null;
  is_froreginer: boolean;
  /**
   * 기업 전화번호
   */
  busi_contact: string;
  /**
   * 담당자 연락처
   */
  manageContact: string;
  resignDate: any | null;
  gender: GENDER;
  busi_num: string;
  /**
   * 회원가입 거절 사유
   */
  denyReason: string | null;
  /**
   * 부서명
   */
  busi_department: string;
  isVerifiedManager: boolean;
  isVerifiedPhoneNumber: boolean;
  /**
   * 사업자 등록증
   */
  busiRegistration: settlementList_SettlementList_data_product_author_busiRegistration | null;
  /**
   * 개인 법인인지 아닌지 체크함 True = 법인
   */
  is_priv_corper: boolean;
  /**
   * 사업자명
   */
  busi_name: string;
  busi_address: string;
  account_number: string;
  name: string;
  bank_name: string;
  resignReason: string | null;
  resignReasonType: string | null;
  isResigned: boolean | null;
  phoneNumber: string;
  /**
   * 프로필 사진
   */
  profileImg: settlementList_SettlementList_data_product_author_profileImg | null;
  /**
   * 가이드 자격증
   */
  guideLicense: settlementList_SettlementList_data_product_author_guideLicense | null;
  /**
   * 가이드 자격증들
   */
  guideLicenses: settlementList_SettlementList_data_product_author_guideLicenses[] | null;
  /**
   * 주력언어
   */
  lang: Lang;
  /**
   * 통장사본
   */
  bankImg: settlementList_SettlementList_data_product_author_bankImg | null;
}

export interface settlementList_SettlementList_data_product {
  __typename: "Product";
  /**
   * 예약인원에 대한 요약
   */
  bookerSummary: settlementList_SettlementList_data_product_bookerSummary;
  _id: string;
  createdAt: any;
  updatedAt: any;
  regionLabel: string | null;
  isDelete: boolean;
  title: string;
  code: string;
  lang: Lang;
  /**
   * 취소를 제외한 상품 하나에 대한 모든 인원
   */
  peopleCount: number;
  contents: string;
  determined: boolean;
  endDate: any;
  dateRange: number;
  adminMemo: string;
  groupCode: string;
  region: settlementList_SettlementList_data_product_region | null;
  category: settlementList_SettlementList_data_product_category | null;
  status: ProductStatus;
  itinerary: settlementList_SettlementList_data_product_itinerary[];
  inOrNor: string;
  info: string;
  caution: string | null;
  images: settlementList_SettlementList_data_product_images[] | null;
  keyWards: string[] | null;
  address: string;
  thumb: settlementList_SettlementList_data_product_thumb | null;
  startPoint: string;
  maxMember: number;
  minMember: number;
  /**
   * 유저가 업데이트 요청을 했을때 어떤 변경이였는지 메모
   */
  requestMemo: string;
  subTitle: string | null;
  adult_price: number;
  bookingCount: number;
  kids_price: number;
  /**
   * 상품 하나에 대한 결제완료된 예약 총 인원
   */
  compeltePeopleCnt: number;
  baby_price: number;
  isNotice: boolean | null;
  elseReq: ProductReOpenReq | null;
  isOpen: boolean | null;
  type: ProductType;
  startDate: any;
  Dday: number;
  author: settlementList_SettlementList_data_product_author | null;
}

export interface settlementList_SettlementList_data {
  __typename: "Settlement";
  _id: string;
  createdAt: any;
  updatedAt: any;
  isDelete: boolean;
  status: SettlementStatus;
  totalPrice: number;
  cardPrice: number;
  bankPrice: number;
  settlementPrice: number;
  totalFee: number;
  cardFee: number;
  niceCardFee: number;
  jandaCardFee: number;
  bankFee: number;
  additionFeeSum: number;
  jandaFee: number;
  cancelReturnPriceTotal: number;
  cancelReturnPrice: number;
  reserveDiffPrice: number[];
  reserveDiffPriceTotal: number;
  payReqPrice: number;
  requestDate: any | null;
  acceptDate: any | null;
  completeDate: any | null;
  cancelDate: any | null;
  seller: settlementList_SettlementList_data_seller;
  product: settlementList_SettlementList_data_product;
}

export interface settlementList_SettlementList {
  __typename: "SettlementListResponse";
  ok: boolean;
  error: settlementList_SettlementList_error | null;
  page: settlementList_SettlementList_page;
  data: settlementList_SettlementList_data[];
}

export interface settlementList {
  SettlementList: settlementList_SettlementList;
}

export interface settlementListVariables {
  sort?: _SettlementSort[] | null;
  filter?: _SettlementFilter | null;
  pageInput: pageInput;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: settlementRequest
// ====================================================

export interface settlementRequest_SettlementRequest_error {
  __typename: "CustomError";
  location: string;
  severity: ERR_SEVERITY;
  code: ERR_CODE;
  message: string;
}

export interface settlementRequest_SettlementRequest {
  __typename: "SettlementRequestResponse";
  ok: boolean;
  error: settlementRequest_SettlementRequest_error | null;
}

export interface settlementRequest {
  SettlementRequest: settlementRequest_SettlementRequest;
}

export interface settlementRequestVariables {
  settlementId: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: settlementComplete
// ====================================================

export interface settlementComplete_SettlementComplete_error {
  __typename: "CustomError";
  location: string;
  severity: ERR_SEVERITY;
  code: ERR_CODE;
  message: string;
}

export interface settlementComplete_SettlementComplete {
  __typename: "SettlementCompleteResponse";
  ok: boolean;
  error: settlementComplete_SettlementComplete_error | null;
}

export interface settlementComplete {
  SettlementComplete: settlementComplete_SettlementComplete;
}

export interface settlementCompleteVariables {
  settlementId: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: settlementReject
// ====================================================

export interface settlementReject_SettlementReject_error {
  __typename: "CustomError";
  location: string;
  severity: ERR_SEVERITY;
  code: ERR_CODE;
  message: string;
}

export interface settlementReject_SettlementReject {
  __typename: "SettlementRejectResponse";
  ok: boolean;
  error: settlementReject_SettlementReject_error | null;
}

export interface settlementReject {
  SettlementReject: settlementReject_SettlementReject;
}

export interface settlementRejectVariables {
  settlementId: string;
  reason: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: unReadSystemNotiFind
// ====================================================

export interface unReadSystemNotiFind_UnReadSystemNotiFind_error {
  __typename: "CustomError";
  location: string;
  severity: ERR_SEVERITY;
  code: ERR_CODE;
  message: string;
}

export interface unReadSystemNotiFind_UnReadSystemNotiFind_data {
  __typename: "SystemNoti";
  _id: string;
  createdAt: any;
  updatedAt: any;
  isDelete: boolean;
  type: SystemNotiType;
  /**
   * html
   */
  content: string;
  isRead: boolean;
}

export interface unReadSystemNotiFind_UnReadSystemNotiFind {
  __typename: "UnReadSystemNotiFindResponse";
  ok: boolean;
  error: unReadSystemNotiFind_UnReadSystemNotiFind_error | null;
  data: unReadSystemNotiFind_UnReadSystemNotiFind_data[] | null;
}

export interface unReadSystemNotiFind {
  UnReadSystemNotiFind: unReadSystemNotiFind_UnReadSystemNotiFind;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: systemNotiList
// ====================================================

export interface systemNotiList_SystemNotiList_error {
  __typename: "CustomError";
  location: string;
  severity: ERR_SEVERITY;
  code: ERR_CODE;
  message: string;
}

export interface systemNotiList_SystemNotiList_page {
  __typename: "Page";
  /**
   * 현재 페이지 번호
   */
  page: number;
  /**
   * 페이지당 문서 갯수
   */
  cntPerPage: number;
  /**
   * 페이지 총 갯수
   */
  totalPageSize: number;
  /**
   * 시작 페이지 번호
   */
  start_page_num: number;
  /**
   * 마지막 페이지 번호
   */
  end_page_num: number;
  /**
   * 이전(<<) 표시 여부
   */
  isPrev: boolean;
  /**
   * 다음(>>) 표시 여부
   */
  isNext: boolean;
  /**
   * 이전(<<) 클릭시 표시할 페이지 번호
   */
  prev_page_num: number;
  /**
   * 다음(>>) 클릭시 표시할 페이지 번호
   */
  next_page_num: number;
  /**
   * 총 갯수
   */
  totalCount: number;
  /**
   * 마지막 패이지의 갯수 (index계산 하는데 사용함)
   */
  remainder: number;
}

export interface systemNotiList_SystemNotiList_data {
  __typename: "SystemNoti";
  _id: string;
  createdAt: any;
  updatedAt: any;
  isDelete: boolean;
  type: SystemNotiType;
  /**
   * html
   */
  content: string;
  isRead: boolean;
}

export interface systemNotiList_SystemNotiList {
  __typename: "SystemNotiListResponse";
  ok: boolean;
  error: systemNotiList_SystemNotiList_error | null;
  page: systemNotiList_SystemNotiList_page;
  data: systemNotiList_SystemNotiList_data[];
}

export interface systemNotiList {
  SystemNotiList: systemNotiList_SystemNotiList;
}

export interface systemNotiListVariables {
  sort?: _SystemNotiSort[] | null;
  filter?: _SystemNotiFilter | null;
  pageInput: pageInput;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: systemNotiRead
// ====================================================

export interface systemNotiRead_SystemNotiRead_error {
  __typename: "CustomError";
  location: string;
  severity: ERR_SEVERITY;
  code: ERR_CODE;
  message: string;
}

export interface systemNotiRead_SystemNotiRead {
  __typename: "SystemNotiReadResponse";
  ok: boolean;
  error: systemNotiRead_SystemNotiRead_error | null;
}

export interface systemNotiRead {
  SystemNotiRead: systemNotiRead_SystemNotiRead;
}

export interface systemNotiReadVariables {
  ids: string[];
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: systemNotiHide
// ====================================================

export interface systemNotiHide_SystemNotiHide_error {
  __typename: "CustomError";
  location: string;
  severity: ERR_SEVERITY;
  code: ERR_CODE;
  message: string;
}

export interface systemNotiHide_SystemNotiHide {
  __typename: "SystemNotiHideResponse";
  ok: boolean;
  error: systemNotiHide_SystemNotiHide_error | null;
}

export interface systemNotiHide {
  SystemNotiHide: systemNotiHide_SystemNotiHide;
}

export interface systemNotiHideVariables {
  ids: string[];
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: signUp
// ====================================================

export interface signUp_SignUp_error {
  __typename: "CustomError";
  location: string;
  severity: ERR_SEVERITY;
  code: ERR_CODE;
  message: string;
}

export interface signUp_SignUp_data {
  __typename: "SignUpResult";
  email: string;
}

export interface signUp_SignUp {
  __typename: "SignUpResponse";
  ok: boolean;
  error: signUp_SignUp_error | null;
  data: signUp_SignUp_data | null;
}

export interface signUp {
  SignUp: signUp_SignUp;
}

export interface signUpVariables {
  params: AddUserInput;
  verificationId: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: sellerListPublic
// ====================================================

export interface sellerListPublic_SellerListPublic_error {
  __typename: "CustomError";
  location: string;
  severity: ERR_SEVERITY;
  code: ERR_CODE;
  message: string;
}

export interface sellerListPublic_SellerListPublic_page {
  __typename: "Page";
  /**
   * 현재 페이지 번호
   */
  page: number;
  /**
   * 페이지당 문서 갯수
   */
  cntPerPage: number;
  /**
   * 페이지 총 갯수
   */
  totalPageSize: number;
  /**
   * 시작 페이지 번호
   */
  start_page_num: number;
  /**
   * 마지막 페이지 번호
   */
  end_page_num: number;
  /**
   * 이전(<<) 표시 여부
   */
  isPrev: boolean;
  /**
   * 다음(>>) 표시 여부
   */
  isNext: boolean;
  /**
   * 이전(<<) 클릭시 표시할 페이지 번호
   */
  prev_page_num: number;
  /**
   * 다음(>>) 클릭시 표시할 페이지 번호
   */
  next_page_num: number;
  /**
   * 총 갯수
   */
  totalCount: number;
  /**
   * 마지막 패이지의 갯수 (index계산 하는데 사용함)
   */
  remainder: number;
}

export interface sellerListPublic_SellerListPublic_data_zoneinfo {
  __typename: "Zoneinfo";
  timezone: string;
  offset: number;
  callingCode: string;
  alpha2Code: string;
}

export interface sellerListPublic_SellerListPublic_data_profileImg {
  __typename: "File";
  uri: string;
}

export interface sellerListPublic_SellerListPublic_data {
  __typename: "publicSellerData";
  _id: string;
  zoneinfo: sellerListPublic_SellerListPublic_data_zoneinfo;
  email: string;
  gender: GENDER;
  /**
   * 판매자에 대한 키워드 모음
   */
  keywards: string[] | null;
  /**
   * 닉네임 유니크
   */
  nickName: string;
  productCount: number;
  bookingCount: number;
  /**
   * 프로필 사진
   */
  profileImg: sellerListPublic_SellerListPublic_data_profileImg | null;
}

export interface sellerListPublic_SellerListPublic {
  __typename: "SellerListPublicResponse";
  ok: boolean;
  error: sellerListPublic_SellerListPublic_error | null;
  page: sellerListPublic_SellerListPublic_page;
  data: sellerListPublic_SellerListPublic_data[];
}

export interface sellerListPublic {
  SellerListPublic: sellerListPublic_SellerListPublic;
}

export interface sellerListPublicVariables {
  sort?: _SellerSort[] | null;
  filter?: _SellerFilter | null;
  pageInput: pageInput;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: randomSellerListPublic
// ====================================================

export interface randomSellerListPublic_RandomSellerListPublic_error {
  __typename: "CustomError";
  location: string;
  severity: ERR_SEVERITY;
  code: ERR_CODE;
  message: string;
}

export interface randomSellerListPublic_RandomSellerListPublic_data_zoneinfo {
  __typename: "Zoneinfo";
  timezone: string;
  offset: number;
  callingCode: string;
  alpha2Code: string;
}

export interface randomSellerListPublic_RandomSellerListPublic_data_profileImg {
  __typename: "File";
  uri: string;
}

export interface randomSellerListPublic_RandomSellerListPublic_data {
  __typename: "publicSellerData";
  _id: string;
  zoneinfo: randomSellerListPublic_RandomSellerListPublic_data_zoneinfo;
  email: string;
  gender: GENDER;
  /**
   * 판매자에 대한 키워드 모음
   */
  keywards: string[] | null;
  /**
   * 닉네임 유니크
   */
  nickName: string;
  productCount: number;
  bookingCount: number;
  /**
   * 프로필 사진
   */
  profileImg: randomSellerListPublic_RandomSellerListPublic_data_profileImg | null;
}

export interface randomSellerListPublic_RandomSellerListPublic {
  __typename: "RandomSellerListPublicResponse";
  ok: boolean;
  error: randomSellerListPublic_RandomSellerListPublic_error | null;
  data: randomSellerListPublic_RandomSellerListPublic_data[] | null;
}

export interface randomSellerListPublic {
  RandomSellerListPublic: randomSellerListPublic_RandomSellerListPublic;
}

export interface randomSellerListPublicVariables {
  random?: number | null;
  filter?: _SellerFilter | null;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: userResign
// ====================================================

export interface userResign_UserResign_error {
  __typename: "CustomError";
  location: string;
  severity: ERR_SEVERITY;
  code: ERR_CODE;
  message: string;
}

export interface userResign_UserResign {
  __typename: "UserResignResponse";
  ok: boolean;
  error: userResign_UserResign_error | null;
}

export interface userResign {
  UserResign: userResign_UserResign;
}

export interface userResignVariables {
  _id: string;
  pw: string;
  reason: string;
  resignReasonType: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: signIn
// ====================================================

export interface signIn_SignIn_error {
  __typename: "CustomError";
  location: string;
  severity: ERR_SEVERITY;
  code: ERR_CODE;
  message: string;
}

export interface signIn_SignIn_data {
  __typename: "SignIn";
  token: string;
}

export interface signIn_SignIn {
  __typename: "SiginResponse";
  ok: boolean;
  error: signIn_SignIn_error | null;
  data: signIn_SignIn_data | null;
}

export interface signIn {
  SignIn: signIn_SignIn;
}

export interface signInVariables {
  email: any;
  pw: string;
  hopeRole?: UserRole | null;
  permanence?: boolean | null;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: userUpdate
// ====================================================

export interface userUpdate_UserUpdate_error {
  __typename: "CustomError";
  location: string;
  severity: ERR_SEVERITY;
  code: ERR_CODE;
  message: string;
}

export interface userUpdate_UserUpdate_data {
  __typename: "User";
  _id: string;
  createdAt: any;
}

export interface userUpdate_UserUpdate {
  __typename: "UserUpdateResponse";
  ok: boolean;
  error: userUpdate_UserUpdate_error | null;
  data: userUpdate_UserUpdate_data | null;
}

export interface userUpdate {
  UserUpdate: userUpdate_UserUpdate;
}

export interface userUpdateVariables {
  params: UserUpdateInput;
  _id: string;
  currentPw?: string | null;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: emailDuplicateCheck
// ====================================================

export interface emailDuplicateCheck_EmailDuplicateCheck_error {
  __typename: "CustomError";
  location: string;
  severity: ERR_SEVERITY;
  code: ERR_CODE;
  message: string;
}

export interface emailDuplicateCheck_EmailDuplicateCheck_data {
  __typename: "CheckDuplicate";
  duplicated: boolean;
}

export interface emailDuplicateCheck_EmailDuplicateCheck {
  __typename: "CheckDuplicateResponse";
  ok: boolean;
  error: emailDuplicateCheck_EmailDuplicateCheck_error | null;
  data: emailDuplicateCheck_EmailDuplicateCheck_data | null;
}

export interface emailDuplicateCheck {
  EmailDuplicateCheck: emailDuplicateCheck_EmailDuplicateCheck;
}

export interface emailDuplicateCheckVariables {
  email: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: signUpDeny
// ====================================================

export interface signUpDeny_SignUpDeny_error {
  __typename: "CustomError";
  location: string;
  severity: ERR_SEVERITY;
  code: ERR_CODE;
  message: string;
}

export interface signUpDeny_SignUpDeny {
  __typename: "SignUpDenyResponse";
  ok: boolean;
  error: signUpDeny_SignUpDeny_error | null;
}

export interface signUpDeny {
  SignUpDeny: signUpDeny_SignUpDeny;
}

export interface signUpDenyVariables {
  userIds: string[];
  reason: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: signUpAccept
// ====================================================

export interface signUpAccept_SignUpAccept_error {
  __typename: "CustomError";
  location: string;
  severity: ERR_SEVERITY;
  code: ERR_CODE;
  message: string;
}

export interface signUpAccept_SignUpAccept {
  __typename: "SignUpAcceptResponse";
  ok: boolean;
  error: signUpAccept_SignUpAccept_error | null;
}

export interface signUpAccept {
  SignUpAccept: signUpAccept_SignUpAccept;
}

export interface signUpAcceptVariables {
  userIds: string[];
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: stopUser
// ====================================================

export interface stopUser_StopUser_error {
  __typename: "CustomError";
  location: string;
  severity: ERR_SEVERITY;
  code: ERR_CODE;
  message: string;
}

export interface stopUser_StopUser {
  __typename: "StopUserResponse";
  ok: boolean;
  error: stopUser_StopUser_error | null;
}

export interface stopUser {
  StopUser: stopUser_StopUser;
}

export interface stopUserVariables {
  userIds: string[];
  reason: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: restartUser
// ====================================================

export interface restartUser_RestartUser_error {
  __typename: "CustomError";
  location: string;
  severity: ERR_SEVERITY;
  code: ERR_CODE;
  message: string;
}

export interface restartUser_RestartUser {
  __typename: "RestartUserResponse";
  ok: boolean;
  error: restartUser_RestartUser_error | null;
}

export interface restartUser {
  RestartUser: restartUser_RestartUser;
}

export interface restartUserVariables {
  userIds: string[];
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: verificationStart
// ====================================================

export interface verificationStart_VerificationStart_error {
  __typename: "CustomError";
  location: string;
  severity: ERR_SEVERITY;
  code: ERR_CODE;
  message: string;
}

export interface verificationStart_VerificationStart_data {
  __typename: "Verification";
  _id: string;
  payload: string;
  target: VerificationTarget;
  isVerified: boolean;
}

export interface verificationStart_VerificationStart {
  __typename: "VerificationResponse";
  ok: boolean;
  error: verificationStart_VerificationStart_error | null;
  data: verificationStart_VerificationStart_data | null;
}

export interface verificationStart {
  /**
   * 인증 요청을 하는 함수, 이메일 또는 핸드폰으로 인증번호를 발신하고 인증 테이블에 요청 추가함
   */
  VerificationStart: verificationStart_VerificationStart;
}

export interface verificationStartVariables {
  target: VerificationTarget;
  payload: string;
  event: VerificationEvent;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: verificationComplete
// ====================================================

export interface verificationComplete_VerificationComplete_error {
  __typename: "CustomError";
  location: string;
  severity: ERR_SEVERITY;
  code: ERR_CODE;
  message: string;
}

export interface verificationComplete_VerificationComplete_data {
  __typename: "Verification";
  _id: string;
  createdAt: any;
  updatedAt: any;
  payload: string;
  target: VerificationTarget;
  isVerified: boolean;
  /**
   * 어떤 액션을 위해 인증을 하는 것인지 표시 
   *             	 - ex) UserVerifyPhone, UserVerifyEmail, UserFindPassword, UserFindEmail, UserUpdateInfo
   */
  event: VerificationEvent;
  storeCode: string | null;
  expiresAt: any;
  isExpire: boolean;
}

export interface verificationComplete_VerificationComplete {
  __typename: "VerificationResponse";
  ok: boolean;
  error: verificationComplete_VerificationComplete_error | null;
  data: verificationComplete_VerificationComplete_data | null;
}

export interface verificationComplete {
  VerificationComplete: verificationComplete_VerificationComplete;
}

export interface verificationCompleteVariables {
  verificationId: string;
  target: VerificationTarget;
  code: string;
  payload: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: userList
// ====================================================

export interface userList_UserList_error {
  __typename: "CustomError";
  location: string;
  severity: ERR_SEVERITY;
  code: ERR_CODE;
  message: string;
}

export interface userList_UserList_page {
  __typename: "Page";
  /**
   * 현재 페이지 번호
   */
  page: number;
  /**
   * 페이지당 문서 갯수
   */
  cntPerPage: number;
  /**
   * 페이지 총 갯수
   */
  totalPageSize: number;
  /**
   * 시작 페이지 번호
   */
  start_page_num: number;
  /**
   * 마지막 페이지 번호
   */
  end_page_num: number;
  /**
   * 이전(<<) 표시 여부
   */
  isPrev: boolean;
  /**
   * 다음(>>) 표시 여부
   */
  isNext: boolean;
  /**
   * 이전(<<) 클릭시 표시할 페이지 번호
   */
  prev_page_num: number;
  /**
   * 다음(>>) 클릭시 표시할 페이지 번호
   */
  next_page_num: number;
  /**
   * 총 갯수
   */
  totalCount: number;
  /**
   * 마지막 패이지의 갯수 (index계산 하는데 사용함)
   */
  remainder: number;
}

export interface userList_UserList_data_busiRegistration {
  __typename: "File";
  name: string;
  uri: string;
  owner: string;
}

export interface userList_UserList_data_profileImg {
  __typename: "File";
  uri: string;
}

export interface userList_UserList_data_guideLicense {
  __typename: "File";
  name: string;
  uri: string;
  owner: string;
}

export interface userList_UserList_data_guideLicenses {
  __typename: "File";
  name: string;
  uri: string;
  owner: string;
}

export interface userList_UserList_data_bankImg {
  __typename: "File";
  name: string;
  uri: string;
  owner: string;
}

export interface userList_UserList_data {
  __typename: "User";
  _id: string;
  /**
   * 닉네임 유니크
   */
  nickName: string;
  createdAt: any;
  updatedAt: any;
  isDelete: boolean;
  email: string;
  /**
   * 담당자명
   */
  manageName: string;
  connectionCount: number;
  role: UserRole;
  brith_date: string;
  address: string;
  address_detail: string;
  acceptSms: boolean;
  status: UserStatus;
  acceptEamil: boolean;
  /**
   * 매니저에 의한 회원가입 거절
   */
  isDenied: boolean | null;
  is_froreginer: boolean;
  /**
   * 기업 전화번호
   */
  busi_contact: string;
  /**
   * 담당자 연락처
   */
  manageContact: string;
  resignDate: any | null;
  gender: GENDER;
  busi_num: string;
  /**
   * 회원가입 거절 사유
   */
  denyReason: string | null;
  /**
   * 부서명
   */
  busi_department: string;
  isVerifiedManager: boolean;
  isVerifiedPhoneNumber: boolean;
  /**
   * 사업자 등록증
   */
  busiRegistration: userList_UserList_data_busiRegistration | null;
  /**
   * 개인 법인인지 아닌지 체크함 True = 법인
   */
  is_priv_corper: boolean;
  /**
   * 사업자명
   */
  busi_name: string;
  busi_address: string;
  account_number: string;
  name: string;
  bank_name: string;
  resignReason: string | null;
  resignReasonType: string | null;
  isResigned: boolean | null;
  phoneNumber: string;
  /**
   * 프로필 사진
   */
  profileImg: userList_UserList_data_profileImg | null;
  /**
   * 가이드 자격증
   */
  guideLicense: userList_UserList_data_guideLicense | null;
  /**
   * 가이드 자격증들
   */
  guideLicenses: userList_UserList_data_guideLicenses[] | null;
  /**
   * 주력언어
   */
  lang: Lang;
  /**
   * 통장사본
   */
  bankImg: userList_UserList_data_bankImg | null;
}

export interface userList_UserList {
  __typename: "UserListResponse";
  ok: boolean;
  error: userList_UserList_error | null;
  page: userList_UserList_page;
  data: userList_UserList_data[];
}

export interface userList {
  UserList: userList_UserList;
}

export interface userListVariables {
  sort?: _UserSort[] | null;
  filter?: _UserFilter | null;
  pageInput: pageInput;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: sellerIdlistPublic
// ====================================================

export interface sellerIdlistPublic_SellerListPublic_data {
  __typename: "publicSellerData";
  _id: string;
}

export interface sellerIdlistPublic_SellerListPublic {
  __typename: "SellerListPublicResponse";
  data: sellerIdlistPublic_SellerListPublic_data[];
}

export interface sellerIdlistPublic {
  SellerListPublic: sellerIdlistPublic_SellerListPublic;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: sellerFindByKey
// ====================================================

export interface sellerFindByKey_SellerFindByKeyPublic_data_zoneinfo {
  __typename: "Zoneinfo";
  timezone: string;
  offset: number;
  callingCode: string;
  alpha2Code: string;
}

export interface sellerFindByKey_SellerFindByKeyPublic_data_profileImg {
  __typename: "File";
  uri: string;
}

export interface sellerFindByKey_SellerFindByKeyPublic_data_products_region {
  __typename: "Category";
  label: string;
  _id: string;
}

export interface sellerFindByKey_SellerFindByKeyPublic_data_products_category {
  __typename: "Category";
  _id: string;
  label: string;
}

export interface sellerFindByKey_SellerFindByKeyPublic_data_products_bookerSummary {
  __typename: "BookerSummary";
  adultCount: number;
  babyCount: number;
  kidsCount: number;
  completeBookCount: number;
  readyBookCount: number;
  cancelBookCount: number;
}

export interface sellerFindByKey_SellerFindByKeyPublic_data_products_itinerary_images {
  __typename: "File";
  name: string;
  uri: string;
  owner: string;
}

export interface sellerFindByKey_SellerFindByKeyPublic_data_products_itinerary {
  __typename: "Itinerary";
  _id: string;
  createdAt: any;
  updatedAt: any;
  isDelete: boolean;
  title: string;
  contents: string[];
  images: sellerFindByKey_SellerFindByKeyPublic_data_products_itinerary_images[];
  date: any;
}

export interface sellerFindByKey_SellerFindByKeyPublic_data_products_images {
  __typename: "File";
  name: string;
  uri: string;
  owner: string;
}

export interface sellerFindByKey_SellerFindByKeyPublic_data_products_thumb {
  __typename: "File";
  uri: string;
}

export interface sellerFindByKey_SellerFindByKeyPublic_data_products {
  __typename: "Product";
  _id: string;
  createdAt: any;
  updatedAt: any;
  regionLabel: string | null;
  isDelete: boolean;
  title: string;
  code: string;
  lang: Lang;
  /**
   * 취소를 제외한 상품 하나에 대한 모든 인원
   */
  peopleCount: number;
  contents: string;
  determined: boolean;
  endDate: any;
  dateRange: number;
  adminMemo: string;
  groupCode: string;
  region: sellerFindByKey_SellerFindByKeyPublic_data_products_region | null;
  category: sellerFindByKey_SellerFindByKeyPublic_data_products_category | null;
  /**
   * 예약인원에 대한 요약
   */
  bookerSummary: sellerFindByKey_SellerFindByKeyPublic_data_products_bookerSummary;
  status: ProductStatus;
  itinerary: sellerFindByKey_SellerFindByKeyPublic_data_products_itinerary[];
  inOrNor: string;
  info: string;
  caution: string | null;
  images: sellerFindByKey_SellerFindByKeyPublic_data_products_images[] | null;
  keyWards: string[] | null;
  address: string;
  thumb: sellerFindByKey_SellerFindByKeyPublic_data_products_thumb | null;
  startPoint: string;
  maxMember: number;
  minMember: number;
  /**
   * 유저가 업데이트 요청을 했을때 어떤 변경이였는지 메모
   */
  requestMemo: string;
  subTitle: string | null;
  adult_price: number;
  bookingCount: number;
  kids_price: number;
  /**
   * 상품 하나에 대한 결제완료된 예약 총 인원
   */
  compeltePeopleCnt: number;
  baby_price: number;
  isNotice: boolean | null;
  elseReq: ProductReOpenReq | null;
  isOpen: boolean | null;
  type: ProductType;
  startDate: any;
  Dday: number;
}

export interface sellerFindByKey_SellerFindByKeyPublic_data {
  __typename: "publicSellerData";
  _id: string;
  zoneinfo: sellerFindByKey_SellerFindByKeyPublic_data_zoneinfo;
  email: string;
  gender: GENDER;
  /**
   * 판매자에 대한 키워드 모음
   */
  keywards: string[] | null;
  /**
   * 닉네임 유니크
   */
  nickName: string;
  productCount: number;
  bookingCount: number;
  /**
   * 프로필 사진
   */
  profileImg: sellerFindByKey_SellerFindByKeyPublic_data_profileImg | null;
  products: sellerFindByKey_SellerFindByKeyPublic_data_products[];
}

export interface sellerFindByKey_SellerFindByKeyPublic {
  __typename: "SellerFindByKeyPublicResponse";
  data: sellerFindByKey_SellerFindByKeyPublic_data | null;
}

export interface sellerFindByKey {
  SellerFindByKeyPublic: sellerFindByKey_SellerFindByKeyPublic;
}

export interface sellerFindByKeyVariables {
  key: string;
  value: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: userFindById
// ====================================================

export interface userFindById_UserFindById_error {
  __typename: "CustomError";
  location: string;
  severity: ERR_SEVERITY;
  code: ERR_CODE;
  message: string;
}

export interface userFindById_UserFindById_data_busiRegistration {
  __typename: "File";
  name: string;
  uri: string;
  owner: string;
}

export interface userFindById_UserFindById_data_profileImg {
  __typename: "File";
  uri: string;
}

export interface userFindById_UserFindById_data_guideLicense {
  __typename: "File";
  name: string;
  uri: string;
  owner: string;
}

export interface userFindById_UserFindById_data_guideLicenses {
  __typename: "File";
  name: string;
  uri: string;
  owner: string;
}

export interface userFindById_UserFindById_data_bankImg {
  __typename: "File";
  name: string;
  uri: string;
  owner: string;
}

export interface userFindById_UserFindById_data_products_region {
  __typename: "Category";
  label: string;
  _id: string;
}

export interface userFindById_UserFindById_data_products_category {
  __typename: "Category";
  _id: string;
  label: string;
}

export interface userFindById_UserFindById_data_products_bookerSummary {
  __typename: "BookerSummary";
  adultCount: number;
  babyCount: number;
  kidsCount: number;
  completeBookCount: number;
  readyBookCount: number;
  cancelBookCount: number;
}

export interface userFindById_UserFindById_data_products_itinerary_images {
  __typename: "File";
  name: string;
  uri: string;
  owner: string;
}

export interface userFindById_UserFindById_data_products_itinerary {
  __typename: "Itinerary";
  _id: string;
  createdAt: any;
  updatedAt: any;
  isDelete: boolean;
  title: string;
  contents: string[];
  images: userFindById_UserFindById_data_products_itinerary_images[];
  date: any;
}

export interface userFindById_UserFindById_data_products_images {
  __typename: "File";
  name: string;
  uri: string;
  owner: string;
}

export interface userFindById_UserFindById_data_products_thumb {
  __typename: "File";
  uri: string;
}

export interface userFindById_UserFindById_data_products_author_busiRegistration {
  __typename: "File";
  name: string;
  uri: string;
  owner: string;
}

export interface userFindById_UserFindById_data_products_author_profileImg {
  __typename: "File";
  uri: string;
}

export interface userFindById_UserFindById_data_products_author_guideLicense {
  __typename: "File";
  name: string;
  uri: string;
  owner: string;
}

export interface userFindById_UserFindById_data_products_author_guideLicenses {
  __typename: "File";
  name: string;
  uri: string;
  owner: string;
}

export interface userFindById_UserFindById_data_products_author_bankImg {
  __typename: "File";
  name: string;
  uri: string;
  owner: string;
}

export interface userFindById_UserFindById_data_products_author {
  __typename: "User";
  _id: string;
  /**
   * 닉네임 유니크
   */
  nickName: string;
  createdAt: any;
  updatedAt: any;
  isDelete: boolean;
  email: string;
  /**
   * 담당자명
   */
  manageName: string;
  connectionCount: number;
  role: UserRole;
  brith_date: string;
  address: string;
  address_detail: string;
  acceptSms: boolean;
  status: UserStatus;
  acceptEamil: boolean;
  /**
   * 매니저에 의한 회원가입 거절
   */
  isDenied: boolean | null;
  is_froreginer: boolean;
  /**
   * 기업 전화번호
   */
  busi_contact: string;
  /**
   * 담당자 연락처
   */
  manageContact: string;
  resignDate: any | null;
  gender: GENDER;
  busi_num: string;
  /**
   * 회원가입 거절 사유
   */
  denyReason: string | null;
  /**
   * 부서명
   */
  busi_department: string;
  isVerifiedManager: boolean;
  isVerifiedPhoneNumber: boolean;
  /**
   * 사업자 등록증
   */
  busiRegistration: userFindById_UserFindById_data_products_author_busiRegistration | null;
  /**
   * 개인 법인인지 아닌지 체크함 True = 법인
   */
  is_priv_corper: boolean;
  /**
   * 사업자명
   */
  busi_name: string;
  busi_address: string;
  account_number: string;
  name: string;
  bank_name: string;
  resignReason: string | null;
  resignReasonType: string | null;
  isResigned: boolean | null;
  phoneNumber: string;
  /**
   * 프로필 사진
   */
  profileImg: userFindById_UserFindById_data_products_author_profileImg | null;
  /**
   * 가이드 자격증
   */
  guideLicense: userFindById_UserFindById_data_products_author_guideLicense | null;
  /**
   * 가이드 자격증들
   */
  guideLicenses: userFindById_UserFindById_data_products_author_guideLicenses[] | null;
  /**
   * 주력언어
   */
  lang: Lang;
  /**
   * 통장사본
   */
  bankImg: userFindById_UserFindById_data_products_author_bankImg | null;
}

export interface userFindById_UserFindById_data_products {
  __typename: "Product";
  _id: string;
  createdAt: any;
  updatedAt: any;
  regionLabel: string | null;
  isDelete: boolean;
  title: string;
  code: string;
  lang: Lang;
  /**
   * 취소를 제외한 상품 하나에 대한 모든 인원
   */
  peopleCount: number;
  contents: string;
  determined: boolean;
  endDate: any;
  dateRange: number;
  adminMemo: string;
  groupCode: string;
  region: userFindById_UserFindById_data_products_region | null;
  category: userFindById_UserFindById_data_products_category | null;
  /**
   * 예약인원에 대한 요약
   */
  bookerSummary: userFindById_UserFindById_data_products_bookerSummary;
  status: ProductStatus;
  itinerary: userFindById_UserFindById_data_products_itinerary[];
  inOrNor: string;
  info: string;
  caution: string | null;
  images: userFindById_UserFindById_data_products_images[] | null;
  keyWards: string[] | null;
  address: string;
  thumb: userFindById_UserFindById_data_products_thumb | null;
  startPoint: string;
  maxMember: number;
  minMember: number;
  /**
   * 유저가 업데이트 요청을 했을때 어떤 변경이였는지 메모
   */
  requestMemo: string;
  subTitle: string | null;
  adult_price: number;
  bookingCount: number;
  kids_price: number;
  /**
   * 상품 하나에 대한 결제완료된 예약 총 인원
   */
  compeltePeopleCnt: number;
  baby_price: number;
  isNotice: boolean | null;
  elseReq: ProductReOpenReq | null;
  isOpen: boolean | null;
  type: ProductType;
  startDate: any;
  Dday: number;
  author: userFindById_UserFindById_data_products_author | null;
}

export interface userFindById_UserFindById_data_bookings {
  __typename: "Booking";
  _id: string;
  createdAt: any;
  cancelDate: any | null;
  gender: GENDER | null;
  age: string | null;
  payMethod: PayMethod;
  updatedAt: any;
  isDelete: boolean;
  leftTime: number;
  adultCount: number;
  kidCount: number;
  cancelMemo: string | null;
  babyCount: number;
  totalCount: number;
  message: string | null;
  isCancelRequest: boolean | null;
  bookerInclue: boolean;
  bookingPrice: number;
  status: BookingStatus | null;
  isMember: boolean | null;
  memo: string | null;
  code: string;
  groupCode: string;
  name: string;
  email: string;
  phoneNumber: string;
  /**
   * 결제가 되었는지
   */
  isPaid: boolean | null;
}

export interface userFindById_UserFindById_data {
  __typename: "User";
  _id: string;
  /**
   * 닉네임 유니크
   */
  nickName: string;
  createdAt: any;
  updatedAt: any;
  isDelete: boolean;
  email: string;
  /**
   * 담당자명
   */
  manageName: string;
  connectionCount: number;
  role: UserRole;
  brith_date: string;
  address: string;
  address_detail: string;
  acceptSms: boolean;
  status: UserStatus;
  acceptEamil: boolean;
  /**
   * 매니저에 의한 회원가입 거절
   */
  isDenied: boolean | null;
  is_froreginer: boolean;
  /**
   * 기업 전화번호
   */
  busi_contact: string;
  /**
   * 담당자 연락처
   */
  manageContact: string;
  resignDate: any | null;
  gender: GENDER;
  busi_num: string;
  /**
   * 회원가입 거절 사유
   */
  denyReason: string | null;
  /**
   * 부서명
   */
  busi_department: string;
  isVerifiedManager: boolean;
  isVerifiedPhoneNumber: boolean;
  /**
   * 사업자 등록증
   */
  busiRegistration: userFindById_UserFindById_data_busiRegistration | null;
  /**
   * 개인 법인인지 아닌지 체크함 True = 법인
   */
  is_priv_corper: boolean;
  /**
   * 사업자명
   */
  busi_name: string;
  busi_address: string;
  account_number: string;
  name: string;
  bank_name: string;
  resignReason: string | null;
  resignReasonType: string | null;
  isResigned: boolean | null;
  phoneNumber: string;
  /**
   * 프로필 사진
   */
  profileImg: userFindById_UserFindById_data_profileImg | null;
  /**
   * 가이드 자격증
   */
  guideLicense: userFindById_UserFindById_data_guideLicense | null;
  /**
   * 가이드 자격증들
   */
  guideLicenses: userFindById_UserFindById_data_guideLicenses[] | null;
  /**
   * 주력언어
   */
  lang: Lang;
  /**
   * 통장사본
   */
  bankImg: userFindById_UserFindById_data_bankImg | null;
  products: userFindById_UserFindById_data_products[];
  bookings: userFindById_UserFindById_data_bookings[];
}

export interface userFindById_UserFindById {
  __typename: "UserFindByIdResponse";
  ok: boolean;
  error: userFindById_UserFindById_error | null;
  data: userFindById_UserFindById_data | null;
}

export interface userFindById {
  UserFindById: userFindById_UserFindById;
}

export interface userFindByIdVariables {
  id: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: emailFindByInfo
// ====================================================

export interface emailFindByInfo_EmailFindByInfo_error {
  __typename: "CustomError";
  location: string;
  severity: ERR_SEVERITY;
  code: ERR_CODE;
  message: string;
}

export interface emailFindByInfo_EmailFindByInfo_data {
  __typename: "EmailFindByInfo";
  foundEmails: string[];
}

export interface emailFindByInfo_EmailFindByInfo {
  __typename: "EmailFindByInfoResponse";
  ok: boolean;
  error: emailFindByInfo_EmailFindByInfo_error | null;
  data: emailFindByInfo_EmailFindByInfo_data | null;
}

export interface emailFindByInfo {
  EmailFindByInfo: emailFindByInfo_EmailFindByInfo;
}

export interface emailFindByInfoVariables {
  phoneNumber: string;
  name: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: passwordFindByPhone
// ====================================================

export interface passwordFindByPhone_PasswordFindByPhone_error {
  __typename: "CustomError";
  location: string;
  severity: ERR_SEVERITY;
  code: ERR_CODE;
  message: string;
}

export interface passwordFindByPhone_PasswordFindByPhone_data {
  __typename: "PasswordFind";
  resultObj: any;
}

export interface passwordFindByPhone_PasswordFindByPhone {
  __typename: "PasswordFindResponse";
  ok: boolean;
  error: passwordFindByPhone_PasswordFindByPhone_error | null;
  data: passwordFindByPhone_PasswordFindByPhone_data | null;
}

export interface passwordFindByPhone {
  PasswordFindByPhone: passwordFindByPhone_PasswordFindByPhone;
}

export interface passwordFindByPhoneVariables {
  email: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: nickNameDuplicateCheck
// ====================================================

export interface nickNameDuplicateCheck_NickNameDuplicateCheck_error {
  __typename: "CustomError";
  location: string;
  severity: ERR_SEVERITY;
  code: ERR_CODE;
  message: string;
}

export interface nickNameDuplicateCheck_NickNameDuplicateCheck_data {
  __typename: "CheckDuplicate";
  duplicated: boolean;
}

export interface nickNameDuplicateCheck_NickNameDuplicateCheck {
  __typename: "CheckDuplicateResponse";
  ok: boolean;
  error: nickNameDuplicateCheck_NickNameDuplicateCheck_error | null;
  data: nickNameDuplicateCheck_NickNameDuplicateCheck_data | null;
}

export interface nickNameDuplicateCheck {
  NickNameDuplicateCheck: nickNameDuplicateCheck_NickNameDuplicateCheck;
}

export interface nickNameDuplicateCheckVariables {
  nickName: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: passwordChange
// ====================================================

export interface passwordChange_PasswordChange_error {
  __typename: "CustomError";
  location: string;
  severity: ERR_SEVERITY;
  code: ERR_CODE;
  message: string;
}

export interface passwordChange_PasswordChange {
  __typename: "PasswordChangeResponse";
  ok: boolean;
  error: passwordChange_PasswordChange_error | null;
}

export interface passwordChange {
  PasswordChange: passwordChange_PasswordChange;
}

export interface passwordChangeVariables {
  newPassword: string;
  currentPw: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: Fannounce
// ====================================================

export interface Fannounce_author_busiRegistration {
  __typename: "File";
  name: string;
  uri: string;
  owner: string;
}

export interface Fannounce_author_profileImg {
  __typename: "File";
  uri: string;
}

export interface Fannounce_author_guideLicense {
  __typename: "File";
  name: string;
  uri: string;
  owner: string;
}

export interface Fannounce_author_guideLicenses {
  __typename: "File";
  name: string;
  uri: string;
  owner: string;
}

export interface Fannounce_author_bankImg {
  __typename: "File";
  name: string;
  uri: string;
  owner: string;
}

export interface Fannounce_author {
  __typename: "User";
  _id: string;
  /**
   * 닉네임 유니크
   */
  nickName: string;
  createdAt: any;
  updatedAt: any;
  isDelete: boolean;
  email: string;
  /**
   * 담당자명
   */
  manageName: string;
  connectionCount: number;
  role: UserRole;
  brith_date: string;
  address: string;
  address_detail: string;
  acceptSms: boolean;
  status: UserStatus;
  acceptEamil: boolean;
  /**
   * 매니저에 의한 회원가입 거절
   */
  isDenied: boolean | null;
  is_froreginer: boolean;
  /**
   * 기업 전화번호
   */
  busi_contact: string;
  /**
   * 담당자 연락처
   */
  manageContact: string;
  resignDate: any | null;
  gender: GENDER;
  busi_num: string;
  /**
   * 회원가입 거절 사유
   */
  denyReason: string | null;
  /**
   * 부서명
   */
  busi_department: string;
  isVerifiedManager: boolean;
  isVerifiedPhoneNumber: boolean;
  /**
   * 사업자 등록증
   */
  busiRegistration: Fannounce_author_busiRegistration | null;
  /**
   * 개인 법인인지 아닌지 체크함 True = 법인
   */
  is_priv_corper: boolean;
  /**
   * 사업자명
   */
  busi_name: string;
  busi_address: string;
  account_number: string;
  name: string;
  bank_name: string;
  resignReason: string | null;
  resignReasonType: string | null;
  isResigned: boolean | null;
  phoneNumber: string;
  /**
   * 프로필 사진
   */
  profileImg: Fannounce_author_profileImg | null;
  /**
   * 가이드 자격증
   */
  guideLicense: Fannounce_author_guideLicense | null;
  /**
   * 가이드 자격증들
   */
  guideLicenses: Fannounce_author_guideLicenses[] | null;
  /**
   * 주력언어
   */
  lang: Lang;
  /**
   * 통장사본
   */
  bankImg: Fannounce_author_bankImg | null;
}

export interface Fannounce_attachFiles {
  __typename: "File";
  name: string;
  uri: string;
  owner: string;
}

export interface Fannounce_thumb {
  __typename: "File";
  name: string;
  uri: string;
  owner: string;
}

export interface Fannounce {
  __typename: "Announce";
  _id: string;
  createdAt: any;
  updatedAt: any;
  isDelete: boolean;
  title: string;
  no: number;
  contents: string;
  author: Fannounce_author | null;
  isNotice: boolean | null;
  isOpen: boolean | null;
  summary: string | null;
  subTitle: string | null;
  keyWards: string[] | null;
  attachFiles: Fannounce_attachFiles[] | null;
  thumb: Fannounce_thumb | null;
  viewCount: number;
  type: AnnounceType;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: Fanswer
// ====================================================

export interface Fanswer_author_profileImg {
  __typename: "File";
  uri: string;
}

export interface Fanswer_author {
  __typename: "User";
  _id: string;
  name: string;
  /**
   * 프로필 사진
   */
  profileImg: Fanswer_author_profileImg | null;
}

export interface Fanswer {
  __typename: "Answer";
  _id: string;
  createdAt: any;
  updatedAt: any;
  isDelete: boolean;
  content: string;
  author: Fanswer_author;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: Ftraveler
// ====================================================

export interface Ftraveler {
  __typename: "Traveler";
  name: string | null;
  phoneNumber: string;
  gender: GENDER | null;
  age: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: FfeePolicy
// ====================================================

export interface FfeePolicy_addtionalFees {
  __typename: "AddtionalFees";
  feeName: string;
  target: TargetStatus;
  type: AddtionalFeesStatus;
  feePercent: number;
  fee: number;
}

export interface FfeePolicy {
  __typename: "FeePolicy";
  _id: string;
  createdAt: any;
  updatedAt: any;
  isDelete: boolean;
  status: FeePolicyStatus;
  niceCardPercent: number;
  jandaCardPercent: number;
  cardPercent: number;
  bankPercent: number;
  addtionalFees: FfeePolicy_addtionalFees[];
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: FpublicSellerData
// ====================================================

export interface FpublicSellerData_zoneinfo {
  __typename: "Zoneinfo";
  timezone: string;
  offset: number;
  callingCode: string;
  alpha2Code: string;
}

export interface FpublicSellerData_profileImg {
  __typename: "File";
  uri: string;
}

export interface FpublicSellerData {
  __typename: "publicSellerData";
  _id: string;
  zoneinfo: FpublicSellerData_zoneinfo;
  email: string;
  gender: GENDER;
  /**
   * 판매자에 대한 키워드 모음
   */
  keywards: string[] | null;
  /**
   * 닉네임 유니크
   */
  nickName: string;
  productCount: number;
  bookingCount: number;
  /**
   * 프로필 사진
   */
  profileImg: FpublicSellerData_profileImg | null;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: Ffile
// ====================================================

export interface Ffile {
  __typename: "File";
  name: string;
  uri: string;
  owner: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: Fbooking
// ====================================================

export interface Fbooking {
  __typename: "Booking";
  _id: string;
  createdAt: any;
  cancelDate: any | null;
  gender: GENDER | null;
  age: string | null;
  payMethod: PayMethod;
  updatedAt: any;
  isDelete: boolean;
  leftTime: number;
  adultCount: number;
  kidCount: number;
  cancelMemo: string | null;
  babyCount: number;
  totalCount: number;
  message: string | null;
  isCancelRequest: boolean | null;
  bookerInclue: boolean;
  bookingPrice: number;
  status: BookingStatus | null;
  isMember: boolean | null;
  memo: string | null;
  code: string;
  groupCode: string;
  name: string;
  email: string;
  phoneNumber: string;
  /**
   * 결제가 되었는지
   */
  isPaid: boolean | null;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: Fitinerary
// ====================================================

export interface Fitinerary_images {
  __typename: "File";
  name: string;
  uri: string;
  owner: string;
}

export interface Fitinerary {
  __typename: "Itinerary";
  _id: string;
  createdAt: any;
  updatedAt: any;
  isDelete: boolean;
  title: string;
  contents: string[];
  images: Fitinerary_images[];
  date: any;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: FrequestHistory
// ====================================================

export interface FrequestHistory {
  __typename: "RequestHistory";
  methodType: MethodType;
  reqType: RequestStatus;
  date: any;
  reason: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: Fproduct
// ====================================================

export interface Fproduct_region {
  __typename: "Category";
  label: string;
  _id: string;
}

export interface Fproduct_category {
  __typename: "Category";
  _id: string;
  label: string;
}

export interface Fproduct_bookerSummary {
  __typename: "BookerSummary";
  adultCount: number;
  babyCount: number;
  kidsCount: number;
  completeBookCount: number;
  readyBookCount: number;
  cancelBookCount: number;
}

export interface Fproduct_itinerary_images {
  __typename: "File";
  name: string;
  uri: string;
  owner: string;
}

export interface Fproduct_itinerary {
  __typename: "Itinerary";
  _id: string;
  createdAt: any;
  updatedAt: any;
  isDelete: boolean;
  title: string;
  contents: string[];
  images: Fproduct_itinerary_images[];
  date: any;
}

export interface Fproduct_images {
  __typename: "File";
  name: string;
  uri: string;
  owner: string;
}

export interface Fproduct_thumb {
  __typename: "File";
  uri: string;
}

export interface Fproduct {
  __typename: "Product";
  _id: string;
  createdAt: any;
  updatedAt: any;
  regionLabel: string | null;
  isDelete: boolean;
  title: string;
  code: string;
  lang: Lang;
  /**
   * 취소를 제외한 상품 하나에 대한 모든 인원
   */
  peopleCount: number;
  contents: string;
  determined: boolean;
  endDate: any;
  dateRange: number;
  adminMemo: string;
  groupCode: string;
  region: Fproduct_region | null;
  category: Fproduct_category | null;
  /**
   * 예약인원에 대한 요약
   */
  bookerSummary: Fproduct_bookerSummary;
  status: ProductStatus;
  itinerary: Fproduct_itinerary[];
  inOrNor: string;
  info: string;
  caution: string | null;
  images: Fproduct_images[] | null;
  keyWards: string[] | null;
  address: string;
  thumb: Fproduct_thumb | null;
  startPoint: string;
  maxMember: number;
  minMember: number;
  /**
   * 유저가 업데이트 요청을 했을때 어떤 변경이였는지 메모
   */
  requestMemo: string;
  subTitle: string | null;
  adult_price: number;
  bookingCount: number;
  kids_price: number;
  /**
   * 상품 하나에 대한 결제완료된 예약 총 인원
   */
  compeltePeopleCnt: number;
  baby_price: number;
  isNotice: boolean | null;
  elseReq: ProductReOpenReq | null;
  isOpen: boolean | null;
  type: ProductType;
  startDate: any;
  Dday: number;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: Fpayment
// ====================================================

export interface Fpayment_history {
  __typename: "TxHistory";
  status: string;
  price: number;
  metadata: any | null;
  createdAt: any;
  updatedAt: any;
}

export interface Fpayment {
  __typename: "Payment";
  _id: string;
  createdAt: any;
  updatedAt: any;
  isDelete: boolean;
  payMethod: PayMethod;
  status: PaymentStatus;
  price: number;
  totalCancelPrice: number;
  cancelDate: any | null;
  isPartialCancel: number;
  groupCode: string | null;
  history: Fpayment_history[];
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: Flocale
// ====================================================

export interface Flocale {
  __typename: "Locale";
  ko: string;
  en: string;
  ja: string;
  chi: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: Fcategory
// ====================================================

export interface Fcategory_localeLabel {
  __typename: "Locale";
  ko: string;
  en: string;
  ja: string;
  chi: string;
}

export interface Fcategory {
  __typename: "Category";
  _id: string;
  createdAt: any;
  updatedAt: any;
  isDelete: boolean;
  localeLabel: Fcategory_localeLabel | null;
  label: string;
  type: CategoryType;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: Fuser
// ====================================================

export interface Fuser_busiRegistration {
  __typename: "File";
  name: string;
  uri: string;
  owner: string;
}

export interface Fuser_profileImg {
  __typename: "File";
  uri: string;
}

export interface Fuser_guideLicense {
  __typename: "File";
  name: string;
  uri: string;
  owner: string;
}

export interface Fuser_guideLicenses {
  __typename: "File";
  name: string;
  uri: string;
  owner: string;
}

export interface Fuser_bankImg {
  __typename: "File";
  name: string;
  uri: string;
  owner: string;
}

export interface Fuser {
  __typename: "User";
  _id: string;
  /**
   * 닉네임 유니크
   */
  nickName: string;
  createdAt: any;
  updatedAt: any;
  isDelete: boolean;
  email: string;
  /**
   * 담당자명
   */
  manageName: string;
  connectionCount: number;
  role: UserRole;
  brith_date: string;
  address: string;
  address_detail: string;
  acceptSms: boolean;
  status: UserStatus;
  acceptEamil: boolean;
  /**
   * 매니저에 의한 회원가입 거절
   */
  isDenied: boolean | null;
  is_froreginer: boolean;
  /**
   * 기업 전화번호
   */
  busi_contact: string;
  /**
   * 담당자 연락처
   */
  manageContact: string;
  resignDate: any | null;
  gender: GENDER;
  busi_num: string;
  /**
   * 회원가입 거절 사유
   */
  denyReason: string | null;
  /**
   * 부서명
   */
  busi_department: string;
  isVerifiedManager: boolean;
  isVerifiedPhoneNumber: boolean;
  /**
   * 사업자 등록증
   */
  busiRegistration: Fuser_busiRegistration | null;
  /**
   * 개인 법인인지 아닌지 체크함 True = 법인
   */
  is_priv_corper: boolean;
  /**
   * 사업자명
   */
  busi_name: string;
  busi_address: string;
  account_number: string;
  name: string;
  bank_name: string;
  resignReason: string | null;
  resignReasonType: string | null;
  isResigned: boolean | null;
  phoneNumber: string;
  /**
   * 프로필 사진
   */
  profileImg: Fuser_profileImg | null;
  /**
   * 가이드 자격증
   */
  guideLicense: Fuser_guideLicense | null;
  /**
   * 가이드 자격증들
   */
  guideLicenses: Fuser_guideLicenses[] | null;
  /**
   * 주력언어
   */
  lang: Lang;
  /**
   * 통장사본
   */
  bankImg: Fuser_bankImg | null;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: FpageInfo
// ====================================================

export interface FpageInfo {
  __typename: "PageInfo";
  _id: string;
  updatedAt: any;
  isDelete: boolean;
  key: string;
  value: any;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: Fpage
// ====================================================

export interface Fpage {
  __typename: "Page";
  /**
   * 현재 페이지 번호
   */
  page: number;
  /**
   * 페이지당 문서 갯수
   */
  cntPerPage: number;
  /**
   * 페이지 총 갯수
   */
  totalPageSize: number;
  /**
   * 시작 페이지 번호
   */
  start_page_num: number;
  /**
   * 마지막 페이지 번호
   */
  end_page_num: number;
  /**
   * 이전(<<) 표시 여부
   */
  isPrev: boolean;
  /**
   * 다음(>>) 표시 여부
   */
  isNext: boolean;
  /**
   * 이전(<<) 클릭시 표시할 페이지 번호
   */
  prev_page_num: number;
  /**
   * 다음(>>) 클릭시 표시할 페이지 번호
   */
  next_page_num: number;
  /**
   * 총 갯수
   */
  totalCount: number;
  /**
   * 마지막 패이지의 갯수 (index계산 하는데 사용함)
   */
  remainder: number;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: Fgroup
// ====================================================

export interface Fgroup_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface Fgroup {
  __typename: "Group";
  _id: string;
  createdAt: any;
  updatedAt: any;
  isDelete: boolean;
  /**
   * 어떤 모델을 대상으로 정렬을 하는지 정의함
   */
  target: string;
  /**
   * 이 그룹을 호출하기 위한 Uniq한 key값
   */
  key: string;
  label: string;
  /**
   * 그룹안의 순서는 이 배열의 인덱스로 조정됨
   */
  members: string[];
  tags: Fgroup_tags[] | null;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: Fmodal
// ====================================================

export interface Fmodal {
  __typename: "Modal";
  _id: string;
  link: string | null;
  startDate: any;
  endDate: any;
  content: string | null;
  linkBehavior: LinkBehavior | null;
  style: any;
  title: string;
  priority: number | null;
  createdAt: any;
  open: boolean;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: Fbanner
// ====================================================

export interface Fbanner_img {
  __typename: "File";
  name: string;
  uri: string;
  owner: string;
}

export interface Fbanner {
  __typename: "Banner";
  img: Fbanner_img | null;
  link: string;
  target: string;
  use: boolean;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: Fhomepage
// ====================================================

export interface Fhomepage_logo {
  __typename: "File";
  name: string;
  uri: string;
  owner: string;
}

export interface Fhomepage_partnerFooter {
  __typename: "File";
  name: string;
  uri: string;
  owner: string;
}

export interface Fhomepage_logoTop {
  __typename: "File";
  name: string;
  uri: string;
  owner: string;
}

export interface Fhomepage_logoBottom {
  __typename: "File";
  name: string;
  uri: string;
  owner: string;
}

export interface Fhomepage_bannerA_img {
  __typename: "File";
  name: string;
  uri: string;
  owner: string;
}

export interface Fhomepage_bannerA {
  __typename: "Banner";
  img: Fhomepage_bannerA_img | null;
  link: string;
  target: string;
  use: boolean;
}

export interface Fhomepage_bannerB_img {
  __typename: "File";
  name: string;
  uri: string;
  owner: string;
}

export interface Fhomepage_bannerB {
  __typename: "Banner";
  img: Fhomepage_bannerB_img | null;
  link: string;
  target: string;
  use: boolean;
}

export interface Fhomepage_bankInfo {
  __typename: "BankInfo";
  accountHolder: string | null;
  accountNumber: string | null;
  bankName: string | null;
}

export interface Fhomepage_modal {
  __typename: "Modal";
  _id: string;
  link: string | null;
  startDate: any;
  endDate: any;
  content: string | null;
  linkBehavior: LinkBehavior | null;
  style: any;
  title: string;
  priority: number | null;
  createdAt: any;
  open: boolean;
}

export interface Fhomepage {
  __typename: "Homepage";
  logo: Fhomepage_logo | null;
  address: string;
  addressUrl: string;
  siteDesc: string;
  siteKeyWards: string[];
  contact: string;
  siteName: string;
  signUpRedirect: string;
  blacklist: string[];
  partnerFooter: Fhomepage_partnerFooter[] | null;
  productSamples: string[];
  instaLink: string | null;
  blogLink: string | null;
  facebookLink: string | null;
  twitterLink: string | null;
  busiNumber: string;
  email: string;
  ceoName: string;
  /**
   * 영업시간
   */
  openTime: string;
  loginRedirect: string;
  loginOutRedirect: string;
  PrivacyPolicy: string;
  partnerBpolicy: string;
  usePolicy: string;
  travelerPolicy: string;
  partnerPolicy: string;
  marketingPolic: string;
  logoTop: Fhomepage_logoTop | null;
  logoBottom: Fhomepage_logoBottom | null;
  bannerA: Fhomepage_bannerA;
  bannerB: Fhomepage_bannerB;
  /**
   * 통신판매 번호
   */
  degitalSalesNumber: string | null;
  copyRight: string | null;
  bankInfo: Fhomepage_bankInfo | null;
  thirdPolicy: string;
  modal: Fhomepage_modal[];
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: Fnews
// ====================================================

export interface Fnews_author_busiRegistration {
  __typename: "File";
  name: string;
  uri: string;
  owner: string;
}

export interface Fnews_author_profileImg {
  __typename: "File";
  uri: string;
}

export interface Fnews_author_guideLicense {
  __typename: "File";
  name: string;
  uri: string;
  owner: string;
}

export interface Fnews_author_guideLicenses {
  __typename: "File";
  name: string;
  uri: string;
  owner: string;
}

export interface Fnews_author_bankImg {
  __typename: "File";
  name: string;
  uri: string;
  owner: string;
}

export interface Fnews_author {
  __typename: "User";
  _id: string;
  /**
   * 닉네임 유니크
   */
  nickName: string;
  createdAt: any;
  updatedAt: any;
  isDelete: boolean;
  email: string;
  /**
   * 담당자명
   */
  manageName: string;
  connectionCount: number;
  role: UserRole;
  brith_date: string;
  address: string;
  address_detail: string;
  acceptSms: boolean;
  status: UserStatus;
  acceptEamil: boolean;
  /**
   * 매니저에 의한 회원가입 거절
   */
  isDenied: boolean | null;
  is_froreginer: boolean;
  /**
   * 기업 전화번호
   */
  busi_contact: string;
  /**
   * 담당자 연락처
   */
  manageContact: string;
  resignDate: any | null;
  gender: GENDER;
  busi_num: string;
  /**
   * 회원가입 거절 사유
   */
  denyReason: string | null;
  /**
   * 부서명
   */
  busi_department: string;
  isVerifiedManager: boolean;
  isVerifiedPhoneNumber: boolean;
  /**
   * 사업자 등록증
   */
  busiRegistration: Fnews_author_busiRegistration | null;
  /**
   * 개인 법인인지 아닌지 체크함 True = 법인
   */
  is_priv_corper: boolean;
  /**
   * 사업자명
   */
  busi_name: string;
  busi_address: string;
  account_number: string;
  name: string;
  bank_name: string;
  resignReason: string | null;
  resignReasonType: string | null;
  isResigned: boolean | null;
  phoneNumber: string;
  /**
   * 프로필 사진
   */
  profileImg: Fnews_author_profileImg | null;
  /**
   * 가이드 자격증
   */
  guideLicense: Fnews_author_guideLicense | null;
  /**
   * 가이드 자격증들
   */
  guideLicenses: Fnews_author_guideLicenses[] | null;
  /**
   * 주력언어
   */
  lang: Lang;
  /**
   * 통장사본
   */
  bankImg: Fnews_author_bankImg | null;
}

export interface Fnews_attachFiles {
  __typename: "File";
  name: string;
  uri: string;
  owner: string;
}

export interface Fnews_thumb {
  __typename: "File";
  name: string;
  uri: string;
  owner: string;
}

export interface Fnews {
  __typename: "News";
  _id: string;
  createdAt: any;
  updatedAt: any;
  isDelete: boolean;
  title: string;
  contents: string;
  author: Fnews_author | null;
  isNotice: boolean | null;
  isOpen: boolean | null;
  summary: string | null;
  subTitle: string | null;
  keyWards: string[] | null;
  attachFiles: Fnews_attachFiles[] | null;
  thumb: Fnews_thumb | null;
  viewCount: number;
  type: NEWS_TYPE;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: FnotificationTrigger
// ====================================================

export interface FnotificationTrigger_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface FnotificationTrigger {
  __typename: "NotificationTrigger";
  sender: string;
  event: NotificationTriggerEvent;
  isEnabled: boolean;
  tags: FnotificationTrigger_tags[];
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: FsmsTemplate
// ====================================================

export interface FsmsTemplate_trigger_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface FsmsTemplate_trigger {
  __typename: "NotificationTrigger";
  sender: string;
  event: NotificationTriggerEvent;
  isEnabled: boolean;
  tags: FsmsTemplate_trigger_tags[];
}

export interface FsmsTemplate_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface FsmsTemplate {
  __typename: "TemplateSms";
  _id: string;
  createdAt: any;
  name: string;
  description: string | null;
  content: string;
  /**
   * 코드겐용
   */
  _replaceEnum: ReplaceString | null;
  trigger: FsmsTemplate_trigger | null;
  tags: FsmsTemplate_tags[];
  replacers: string[];
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: FnotificationManager
// ====================================================

export interface FnotificationManager_smsPricingTable {
  __typename: "SMSPricingTable";
  SMS: number;
  LMS: number;
  MMS: number;
}

export interface FnotificationManager_templates_trigger_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface FnotificationManager_templates_trigger {
  __typename: "NotificationTrigger";
  sender: string;
  event: NotificationTriggerEvent;
  isEnabled: boolean;
  tags: FnotificationManager_templates_trigger_tags[];
}

export interface FnotificationManager_templates_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface FnotificationManager_templates {
  __typename: "TemplateSms";
  _id: string;
  createdAt: any;
  name: string;
  description: string | null;
  content: string;
  /**
   * 코드겐용
   */
  _replaceEnum: ReplaceString | null;
  trigger: FnotificationManager_templates_trigger | null;
  tags: FnotificationManager_templates_tags[];
  replacers: string[];
}

export interface FnotificationManager {
  __typename: "NotificationManager";
  smsPricingTable: FnotificationManager_smsPricingTable;
  /**
   * 건당 비용. 단위는 KRW
   */
  emailPricing: number;
  currency: Currency;
  /**
   * Email, SMS 뭘로 보내든 포인트 차감
   */
  pointRemains: number;
  templates: FnotificationManager_templates[];
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: FnotificationHistoryItem
// ====================================================

export interface FnotificationHistoryItem {
  __typename: "SmsHistoryItem" | "EmailHistoryItem";
  _id: string;
  createdAt: any;
  updatedAt: any;
  method: NotificationMethod;
  sender: string;
  receivers: string[];
  title: string | null;
  /**
   * Template에서 변수가 치환되지 않은 채로 출력 될 수 있음.
   */
  content: string;
  count: number;
  successCount: number;
  errorCount: number;
  /**
   * 전송 후 남은 포인트
   */
  pointRemains: number;
  /**
   * 포인트 소모량
   */
  pointConsumed: number;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: FnotificationSender
// ====================================================

export interface FnotificationSender {
  __typename: "NotificationSender";
  type: NotificationMethod;
  sender: string;
  isVerified: boolean;
  isRegisteredToAligo: boolean;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: Fportfolio
// ====================================================

export interface Fportfolio_author_busiRegistration {
  __typename: "File";
  name: string;
  uri: string;
  owner: string;
}

export interface Fportfolio_author_profileImg {
  __typename: "File";
  uri: string;
}

export interface Fportfolio_author_guideLicense {
  __typename: "File";
  name: string;
  uri: string;
  owner: string;
}

export interface Fportfolio_author_guideLicenses {
  __typename: "File";
  name: string;
  uri: string;
  owner: string;
}

export interface Fportfolio_author_bankImg {
  __typename: "File";
  name: string;
  uri: string;
  owner: string;
}

export interface Fportfolio_author {
  __typename: "User";
  _id: string;
  /**
   * 닉네임 유니크
   */
  nickName: string;
  createdAt: any;
  updatedAt: any;
  isDelete: boolean;
  email: string;
  /**
   * 담당자명
   */
  manageName: string;
  connectionCount: number;
  role: UserRole;
  brith_date: string;
  address: string;
  address_detail: string;
  acceptSms: boolean;
  status: UserStatus;
  acceptEamil: boolean;
  /**
   * 매니저에 의한 회원가입 거절
   */
  isDenied: boolean | null;
  is_froreginer: boolean;
  /**
   * 기업 전화번호
   */
  busi_contact: string;
  /**
   * 담당자 연락처
   */
  manageContact: string;
  resignDate: any | null;
  gender: GENDER;
  busi_num: string;
  /**
   * 회원가입 거절 사유
   */
  denyReason: string | null;
  /**
   * 부서명
   */
  busi_department: string;
  isVerifiedManager: boolean;
  isVerifiedPhoneNumber: boolean;
  /**
   * 사업자 등록증
   */
  busiRegistration: Fportfolio_author_busiRegistration | null;
  /**
   * 개인 법인인지 아닌지 체크함 True = 법인
   */
  is_priv_corper: boolean;
  /**
   * 사업자명
   */
  busi_name: string;
  busi_address: string;
  account_number: string;
  name: string;
  bank_name: string;
  resignReason: string | null;
  resignReasonType: string | null;
  isResigned: boolean | null;
  phoneNumber: string;
  /**
   * 프로필 사진
   */
  profileImg: Fportfolio_author_profileImg | null;
  /**
   * 가이드 자격증
   */
  guideLicense: Fportfolio_author_guideLicense | null;
  /**
   * 가이드 자격증들
   */
  guideLicenses: Fportfolio_author_guideLicenses[] | null;
  /**
   * 주력언어
   */
  lang: Lang;
  /**
   * 통장사본
   */
  bankImg: Fportfolio_author_bankImg | null;
}

export interface Fportfolio_thumb {
  __typename: "File";
  name: string;
  uri: string;
  owner: string;
}

export interface Fportfolio_category {
  __typename: "Category";
  _id: string;
  label: string;
}

export interface Fportfolio {
  __typename: "Portfolio";
  _id: string;
  createdAt: any;
  updatedAt: any;
  isDelete: boolean;
  title: string;
  isOpen: boolean | null;
  keyWards: string[] | null;
  summary: string | null;
  subTitle: string | null;
  contents: string;
  author: Fportfolio_author | null;
  thumb: Fportfolio_thumb | null;
  category: Fportfolio_category | null;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: Fqna
// ====================================================

export interface Fqna_author_busiRegistration {
  __typename: "File";
  name: string;
  uri: string;
  owner: string;
}

export interface Fqna_author_profileImg {
  __typename: "File";
  uri: string;
}

export interface Fqna_author_guideLicense {
  __typename: "File";
  name: string;
  uri: string;
  owner: string;
}

export interface Fqna_author_guideLicenses {
  __typename: "File";
  name: string;
  uri: string;
  owner: string;
}

export interface Fqna_author_bankImg {
  __typename: "File";
  name: string;
  uri: string;
  owner: string;
}

export interface Fqna_author {
  __typename: "User";
  _id: string;
  /**
   * 닉네임 유니크
   */
  nickName: string;
  createdAt: any;
  updatedAt: any;
  isDelete: boolean;
  email: string;
  /**
   * 담당자명
   */
  manageName: string;
  connectionCount: number;
  role: UserRole;
  brith_date: string;
  address: string;
  address_detail: string;
  acceptSms: boolean;
  status: UserStatus;
  acceptEamil: boolean;
  /**
   * 매니저에 의한 회원가입 거절
   */
  isDenied: boolean | null;
  is_froreginer: boolean;
  /**
   * 기업 전화번호
   */
  busi_contact: string;
  /**
   * 담당자 연락처
   */
  manageContact: string;
  resignDate: any | null;
  gender: GENDER;
  busi_num: string;
  /**
   * 회원가입 거절 사유
   */
  denyReason: string | null;
  /**
   * 부서명
   */
  busi_department: string;
  isVerifiedManager: boolean;
  isVerifiedPhoneNumber: boolean;
  /**
   * 사업자 등록증
   */
  busiRegistration: Fqna_author_busiRegistration | null;
  /**
   * 개인 법인인지 아닌지 체크함 True = 법인
   */
  is_priv_corper: boolean;
  /**
   * 사업자명
   */
  busi_name: string;
  busi_address: string;
  account_number: string;
  name: string;
  bank_name: string;
  resignReason: string | null;
  resignReasonType: string | null;
  isResigned: boolean | null;
  phoneNumber: string;
  /**
   * 프로필 사진
   */
  profileImg: Fqna_author_profileImg | null;
  /**
   * 가이드 자격증
   */
  guideLicense: Fqna_author_guideLicense | null;
  /**
   * 가이드 자격증들
   */
  guideLicenses: Fqna_author_guideLicenses[] | null;
  /**
   * 주력언어
   */
  lang: Lang;
  /**
   * 통장사본
   */
  bankImg: Fqna_author_bankImg | null;
}

export interface Fqna_attachFiles {
  __typename: "File";
  name: string;
  uri: string;
  owner: string;
}

export interface Fqna_thumb {
  __typename: "File";
  name: string;
  uri: string;
  owner: string;
}

export interface Fqna {
  __typename: "Qna";
  _id: string;
  createdAt: any;
  updatedAt: any;
  isDelete: boolean;
  title: string;
  contents: string;
  author: Fqna_author | null;
  isNotice: boolean | null;
  isOpen: boolean | null;
  summary: string | null;
  subTitle: string | null;
  keyWards: string[] | null;
  attachFiles: Fqna_attachFiles[] | null;
  thumb: Fqna_thumb | null;
  viewCount: number;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: Fquestion
// ====================================================

export interface Fquestion_answers_author_profileImg {
  __typename: "File";
  uri: string;
}

export interface Fquestion_answers_author {
  __typename: "User";
  _id: string;
  name: string;
  /**
   * 프로필 사진
   */
  profileImg: Fquestion_answers_author_profileImg | null;
}

export interface Fquestion_answers {
  __typename: "Answer";
  _id: string;
  createdAt: any;
  updatedAt: any;
  isDelete: boolean;
  content: string;
  author: Fquestion_answers_author;
}

export interface Fquestion_attachFiles {
  __typename: "File";
  name: string;
  uri: string;
  owner: string;
}

export interface Fquestion_thumb {
  __typename: "File";
  name: string;
  uri: string;
  owner: string;
}

export interface Fquestion_author_busiRegistration {
  __typename: "File";
  name: string;
  uri: string;
  owner: string;
}

export interface Fquestion_author_profileImg {
  __typename: "File";
  uri: string;
}

export interface Fquestion_author_guideLicense {
  __typename: "File";
  name: string;
  uri: string;
  owner: string;
}

export interface Fquestion_author_guideLicenses {
  __typename: "File";
  name: string;
  uri: string;
  owner: string;
}

export interface Fquestion_author_bankImg {
  __typename: "File";
  name: string;
  uri: string;
  owner: string;
}

export interface Fquestion_author {
  __typename: "User";
  _id: string;
  /**
   * 닉네임 유니크
   */
  nickName: string;
  createdAt: any;
  updatedAt: any;
  isDelete: boolean;
  email: string;
  /**
   * 담당자명
   */
  manageName: string;
  connectionCount: number;
  role: UserRole;
  brith_date: string;
  address: string;
  address_detail: string;
  acceptSms: boolean;
  status: UserStatus;
  acceptEamil: boolean;
  /**
   * 매니저에 의한 회원가입 거절
   */
  isDenied: boolean | null;
  is_froreginer: boolean;
  /**
   * 기업 전화번호
   */
  busi_contact: string;
  /**
   * 담당자 연락처
   */
  manageContact: string;
  resignDate: any | null;
  gender: GENDER;
  busi_num: string;
  /**
   * 회원가입 거절 사유
   */
  denyReason: string | null;
  /**
   * 부서명
   */
  busi_department: string;
  isVerifiedManager: boolean;
  isVerifiedPhoneNumber: boolean;
  /**
   * 사업자 등록증
   */
  busiRegistration: Fquestion_author_busiRegistration | null;
  /**
   * 개인 법인인지 아닌지 체크함 True = 법인
   */
  is_priv_corper: boolean;
  /**
   * 사업자명
   */
  busi_name: string;
  busi_address: string;
  account_number: string;
  name: string;
  bank_name: string;
  resignReason: string | null;
  resignReasonType: string | null;
  isResigned: boolean | null;
  phoneNumber: string;
  /**
   * 프로필 사진
   */
  profileImg: Fquestion_author_profileImg | null;
  /**
   * 가이드 자격증
   */
  guideLicense: Fquestion_author_guideLicense | null;
  /**
   * 가이드 자격증들
   */
  guideLicenses: Fquestion_author_guideLicenses[] | null;
  /**
   * 주력언어
   */
  lang: Lang;
  /**
   * 통장사본
   */
  bankImg: Fquestion_author_bankImg | null;
}

export interface Fquestion {
  __typename: "Question";
  _id: string;
  createdAt: any;
  updatedAt: any;
  isDelete: boolean;
  title: string;
  contents: string;
  code: string;
  isNotice: boolean | null;
  isOpen: boolean | null;
  summary: string | null;
  subTitle: string | null;
  status: QuestionStatus;
  answers: Fquestion_answers[] | null;
  keyWards: string[] | null;
  attachFiles: Fquestion_attachFiles[] | null;
  thumb: Fquestion_thumb | null;
  viewCount: number;
  likeCount: number;
  no: number;
  author: Fquestion_author | null;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: FproductReview
// ====================================================

export interface FproductReview_author_busiRegistration {
  __typename: "File";
  name: string;
  uri: string;
  owner: string;
}

export interface FproductReview_author_profileImg {
  __typename: "File";
  uri: string;
}

export interface FproductReview_author_guideLicense {
  __typename: "File";
  name: string;
  uri: string;
  owner: string;
}

export interface FproductReview_author_guideLicenses {
  __typename: "File";
  name: string;
  uri: string;
  owner: string;
}

export interface FproductReview_author_bankImg {
  __typename: "File";
  name: string;
  uri: string;
  owner: string;
}

export interface FproductReview_author {
  __typename: "User";
  _id: string;
  /**
   * 닉네임 유니크
   */
  nickName: string;
  createdAt: any;
  updatedAt: any;
  isDelete: boolean;
  email: string;
  /**
   * 담당자명
   */
  manageName: string;
  connectionCount: number;
  role: UserRole;
  brith_date: string;
  address: string;
  address_detail: string;
  acceptSms: boolean;
  status: UserStatus;
  acceptEamil: boolean;
  /**
   * 매니저에 의한 회원가입 거절
   */
  isDenied: boolean | null;
  is_froreginer: boolean;
  /**
   * 기업 전화번호
   */
  busi_contact: string;
  /**
   * 담당자 연락처
   */
  manageContact: string;
  resignDate: any | null;
  gender: GENDER;
  busi_num: string;
  /**
   * 회원가입 거절 사유
   */
  denyReason: string | null;
  /**
   * 부서명
   */
  busi_department: string;
  isVerifiedManager: boolean;
  isVerifiedPhoneNumber: boolean;
  /**
   * 사업자 등록증
   */
  busiRegistration: FproductReview_author_busiRegistration | null;
  /**
   * 개인 법인인지 아닌지 체크함 True = 법인
   */
  is_priv_corper: boolean;
  /**
   * 사업자명
   */
  busi_name: string;
  busi_address: string;
  account_number: string;
  name: string;
  bank_name: string;
  resignReason: string | null;
  resignReasonType: string | null;
  isResigned: boolean | null;
  phoneNumber: string;
  /**
   * 프로필 사진
   */
  profileImg: FproductReview_author_profileImg | null;
  /**
   * 가이드 자격증
   */
  guideLicense: FproductReview_author_guideLicense | null;
  /**
   * 가이드 자격증들
   */
  guideLicenses: FproductReview_author_guideLicenses[] | null;
  /**
   * 주력언어
   */
  lang: Lang;
  /**
   * 통장사본
   */
  bankImg: FproductReview_author_bankImg | null;
}

export interface FproductReview_attachFiles {
  __typename: "File";
  name: string;
  uri: string;
  owner: string;
}

export interface FproductReview {
  __typename: "ProductReview";
  _id: string;
  createdAt: any;
  updatedAt: any;
  isDelete: boolean;
  title: string;
  contents: string;
  author: FproductReview_author | null;
  num: number;
  boardTypeName: string | null;
  isNotice: boolean | null;
  isOpen: boolean | null;
  summary: string | null;
  subTitle: string | null;
  keyWards: string[] | null;
  viewCount: number;
  likeCount: number;
  slug: string;
  authorName: string;
  productName: string;
  attachFiles: FproductReview_attachFiles[] | null;
  productAuthorName: string;
  productAuthorId: string;
  productCode: string;
  groupCode: string;
  rating: number;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: Ffeepolicy
// ====================================================

export interface Ffeepolicy {
  __typename: "FeePolicy";
  _id: string;
  createdAt: any;
  updatedAt: any;
  isDelete: boolean;
  status: FeePolicyStatus;
  niceCardPercent: number;
  jandaCardPercent: number;
  cardPercent: number;
  bankPercent: number;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: Fsettlement
// ====================================================

export interface Fsettlement {
  __typename: "Settlement";
  _id: string;
  createdAt: any;
  updatedAt: any;
  isDelete: boolean;
  status: SettlementStatus;
  totalPrice: number;
  cardPrice: number;
  bankPrice: number;
  settlementPrice: number;
  totalFee: number;
  cardFee: number;
  niceCardFee: number;
  jandaCardFee: number;
  bankFee: number;
  additionFeeSum: number;
  jandaFee: number;
  cancelReturnPriceTotal: number;
  cancelReturnPrice: number;
  reserveDiffPrice: number[];
  reserveDiffPriceTotal: number;
  payReqPrice: number;
  requestDate: any | null;
  acceptDate: any | null;
  completeDate: any | null;
  cancelDate: any | null;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: FsystemNoti
// ====================================================

export interface FsystemNoti {
  __typename: "SystemNoti";
  _id: string;
  createdAt: any;
  updatedAt: any;
  isDelete: boolean;
  type: SystemNotiType;
  /**
   * html
   */
  content: string;
  isRead: boolean;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

/**
 * 질문 상태
 */
export enum AddtionalFeesStatus {
  DEFAULT = "DEFAULT",
  PERCNET = "PERCNET",
}

/**
 * 공고문 타입
 */
export enum AnnounceType {
  ACCOUNCE = "ACCOUNCE",
  NOICE = "NOICE",
}

/**
 * 보드 공통 컨트롤 값
 */
export enum BoardAction {
  delete = "delete",
  hide = "hide",
  open = "open",
}

/**
 * 보드종류
 */
export enum BoardType {
  ANNOUNCE = "ANNOUNCE",
  News = "News",
  PORTFOLIO = "PORTFOLIO",
  PRODUCT = "PRODUCT",
  QNA = "QNA",
  QUESTION = "QUESTION",
}

/**
 * 예약상태
 */
export enum BookingStatus {
  CANCEL = "CANCEL",
  COMPLETE = "COMPLETE",
  READY = "READY",
}

/**
 * 카테고리 타입
 */
export enum CategoryType {
  GUIDE_KEYWARD = "GUIDE_KEYWARD",
  QNA = "QNA",
  QUESTION = "QUESTION",
  REGION = "REGION",
  TOUR = "TOUR",
}

/**
 * 통화
 */
export enum Currency {
  JPY = "JPY",
  KRW = "KRW",
  USD = "USD",
}

/**
 * 에러가 발생한 함수 위치
 */
export enum ERR_CODE {
  ALEADY_SAME_DATA = "ALEADY_SAME_DATA",
  AUTHORIZATION = "AUTHORIZATION",
  BACKEND_MESSAGE = "BACKEND_MESSAGE",
  BOOKING_MEMBER_OVER = "BOOKING_MEMBER_OVER",
  DOC_ALEADY_EXIST = "DOC_ALEADY_EXIST",
  DOC_NOT_FOUND = "DOC_NOT_FOUND",
  DOC_RELATED_INVALID = "DOC_RELATED_INVALID",
  EXPECTED_STATUS_NOT = "EXPECTED_STATUS_NOT",
  EXPECTED_VALUE_RANGE_NOT = "EXPECTED_VALUE_RANGE_NOT",
  GENERAL = "GENERAL",
  INVALID_DOC = "INVALID_DOC",
  INVALID_PARAMS = "INVALID_PARAMS",
  NICKNAME_ALEADY_EXIST = "NICKNAME_ALEADY_EXIST",
  PASSWORD_NOT_EQUAL = "PASSWORD_NOT_EQUAL",
  PAY_TIME_OVER = "PAY_TIME_OVER",
  POPULATED_DOC_INVALID = "POPULATED_DOC_INVALID",
  SYSTEM_ERROR = "SYSTEM_ERROR",
}

/**
 * 에러가 발생한 함수 위치
 */
export enum ERR_SEVERITY {
  ERROR = "ERROR",
  INFO = "INFO",
}

/**
 * 질문 상태
 */
export enum FeePolicyStatus {
  COPY = "COPY",
  ORIGINAL = "ORIGINAL",
}

/**
 * 성별
 */
export enum GENDER {
  FEMALE = "FEMALE",
  MAIL = "MAIL",
}

/**
 * 언어
 */
export enum Lang {
  CH = "CH",
  EN = "EN",
  JP = "JP",
  KO = "KO",
}

/**
 * 링크 행동설정
 */
export enum LinkBehavior {
  blank = "blank",
  individual = "individual",
}

/**
 * 공제 대상
 */
export enum MethodType {
  BOOKING = "BOOKING",
  PRODUCT = "PRODUCT",
  PRODUCT_CREATE = "PRODUCT_CREATE",
  PRODUCT_REOPEN = "PRODUCT_REOPEN",
  PRODUCT_UPATE = "PRODUCT_UPATE",
  SETTLEMENT = "SETTLEMENT",
  TRAVEL = "TRAVEL",
}

/**
 * 뉴스 타입
 */
export enum NEWS_TYPE {
  CULTURE = "CULTURE",
  MEDIA = "MEDIA",
  TRAVEL = "TRAVEL",
}

/**
 * 노티 수단...
 */
export enum NotificationMethod {
  EMAIL = "EMAIL",
  SMS = "SMS",
}

export enum NotificationTriggerEvent {
  BANK_TRANSFER_BOOKER = "BANK_TRANSFER_BOOKER",
  BANK_TRANSFER_SELLER = "BANK_TRANSFER_SELLER",
  CANCEL_BOOKING_BOOKER = "CANCEL_BOOKING_BOOKER",
  CANCEL_BOOKING_SELLER = "CANCEL_BOOKING_SELLER",
  COMPLETE_BOOKING_BOOKER = "COMPLETE_BOOKING_BOOKER",
  COMPLETE_BOOKING_SELLER = "COMPLETE_BOOKING_SELLER",
  PRODUCT_CONFIRM_REQUEST = "PRODUCT_CONFIRM_REQUEST",
  PRODUCT_EXPIRE_SELLER = "PRODUCT_EXPIRE_SELLER",
  SETTLEMENT_CANCEL = "SETTLEMENT_CANCEL",
  SETTLEMENT_COMPLETE = "SETTLEMENT_COMPLETE",
  SETTLEMENT_REJECT = "SETTLEMENT_REJECT",
  SETTLEMENT_REQUEST = "SETTLEMENT_REQUEST",
  SIGNUP_INDI_USER = "SIGNUP_INDI_USER",
  SIGNUP_PARNTER_B_USER = "SIGNUP_PARNTER_B_USER",
  SIGNUP_PARTNER_USER = "SIGNUP_PARTNER_USER",
  TRAVEL_CANCELED_BOOKER = "TRAVEL_CANCELED_BOOKER",
  TRAVEL_CANCELED_SELLER = "TRAVEL_CANCELED_SELLER",
  TRAVEL_CONFIRMED_BOOKER = "TRAVEL_CONFIRMED_BOOKER",
  TRAVEL_CONFIRMED_SELLER = "TRAVEL_CONFIRMED_SELLER",
  TRAVEL_WITDRWAL_BOOKER = "TRAVEL_WITDRWAL_BOOKER",
  TRAVEL_WITDRWAL_SELLER = "TRAVEL_WITDRWAL_SELLER",
  WHEN_D_DAY1_BOOKER = "WHEN_D_DAY1_BOOKER",
}

/**
 * 결제 방식
 */
export enum PayMethod {
  BANK = "BANK",
  HAND = "HAND",
  NICEPAY_CARD = "NICEPAY_CARD",
}

/**
 * 결제 상태
 */
export enum PaymentStatus {
  CANCEL = "CANCEL",
  COMPLETE = "COMPLETE",
  READY = "READY",
}

/**
 * 상품 업데이트외 요청
 */
export enum ProductReOpenReq {
  REOPEN = "REOPEN",
}

/**
 * 상품 상태
 */
export enum ProductStatus {
  CANCELD = "CANCELD",
  COMPLETED = "COMPLETED",
  EXPIRED = "EXPIRED",
  OPEN = "OPEN",
  READY = "READY",
  REFUSED = "REFUSED",
  UPDATE_REQ = "UPDATE_REQ",
  UPDATE_REQ_REFUSED = "UPDATE_REQ_REFUSED",
}

/**
 * 상품 타입
 */
export enum ProductType {
  EXPERIENCE = "EXPERIENCE",
  TOUR = "TOUR",
}

/**
 * 질문 상태
 */
export enum QuestionStatus {
  COMPLETE = "COMPLETE",
  READY = "READY",
}

export enum ReplaceString {
  BOOKERNMAE = "BOOKERNMAE",
  BOOKING_STATUS = "BOOKING_STATUS",
  BOOK_DAY = "BOOK_DAY",
  CANCEL_REASON = "CANCEL_REASON",
  CONFRIM_MESSAGE = "CONFRIM_MESSAGE",
  D_DAY = "D_DAY",
  INTERGRATED_PRODUCT_INFO = "INTERGRATED_PRODUCT_INFO",
  PARTNERNAME = "PARTNERNAME",
  PEOPLE = "PEOPLE",
  PRICE = "PRICE",
  PROD_NAME = "PROD_NAME",
  REFUND_AMT = "REFUND_AMT",
  REJECT_REASON = "REJECT_REASON",
  REQUEST_DATE = "REQUEST_DATE",
  SETTLE_PRICE = "SETTLE_PRICE",
  TRAVEL_CONFIRMED = "TRAVEL_CONFIRMED",
  TRAVEL_DATE_YMD = "TRAVEL_DATE_YMD",
  USERNAME = "USERNAME",
}

/**
 * 공제 대상
 */
export enum RequestStatus {
  ACCEPT = "ACCEPT",
  CANCEL = "CANCEL",
  CANCEL_REQ = "CANCEL_REQ",
  COMPLETE = "COMPLETE",
  DETERMIN = "DETERMIN",
  EXPIRED = "EXPIRED",
  REJECT = "REJECT",
  REQUEST = "REQUEST",
  WITHDRAWAL = "WITHDRAWAL",
}

/**
 * 질문 상태
 */
export enum SettlementStatus {
  ACCEPT = "ACCEPT",
  CANCELED = "CANCELED",
  COMPLETE = "COMPLETE",
  READY = "READY",
  REQUEST = "REQUEST",
}

/**
 * 시스템 노티피케이션 타입
 */
export enum SystemNotiType {
  booking = "booking",
  cancel = "cancel",
  member = "member",
  payment = "payment",
  system = "system",
}

/**
 * 공제 대상
 */
export enum TargetStatus {
  BUSINESS = "BUSINESS",
  PERSONAL = "PERSONAL",
}

/**
 * 유저 역할!
 */
export enum UserRole {
  admin = "admin",
  anonymous = "anonymous",
  individual = "individual",
  manager = "manager",
  partner = "partner",
  partnerB = "partnerB",
}

/**
 * 유저 상태
 */
export enum UserStatus {
  ok = "ok",
  stop = "stop",
}

/**
 * 인증 타겟 Enum
 */
export enum VerificationEvent {
  NotificationSenderAdd = "NotificationSenderAdd",
  SignInWithEmail = "SignInWithEmail",
  SignInWithPhone = "SignInWithPhone",
  SignInWtihGoogle = "SignInWtihGoogle",
  SignInWtihKakao = "SignInWtihKakao",
  UserFindEmail = "UserFindEmail",
  UserResetPassword = "UserResetPassword",
  UserUpdateInfo = "UserUpdateInfo",
  UserVerifyEmail = "UserVerifyEmail",
  UserVerifyPhone = "UserVerifyPhone",
}

/**
 * 인증 타겟 Enum
 */
export enum VerificationTarget {
  EMAIL = "EMAIL",
  PHONE = "PHONE",
}

/**
 * Auto generated sort type
 */
export enum _AnnounceSort {
  createdAt_asc = "createdAt_asc",
  createdAt_desc = "createdAt_desc",
  isNotice_asc = "isNotice_asc",
  isNotice_desc = "isNotice_desc",
  likeCount_asc = "likeCount_asc",
  likeCount_desc = "likeCount_desc",
  subTitle_asc = "subTitle_asc",
  subTitle_desc = "subTitle_desc",
  title_asc = "title_asc",
  title_desc = "title_desc",
  type_asc = "type_asc",
  type_desc = "type_desc",
  viewCount_asc = "viewCount_asc",
  viewCount_desc = "viewCount_desc",
}

/**
 * Auto generated sort type
 */
export enum _BoardSort {
  createdAt_asc = "createdAt_asc",
  createdAt_desc = "createdAt_desc",
  isNotice_asc = "isNotice_asc",
  isNotice_desc = "isNotice_desc",
  likeCount_asc = "likeCount_asc",
  likeCount_desc = "likeCount_desc",
  subTitle_asc = "subTitle_asc",
  subTitle_desc = "subTitle_desc",
  title_asc = "title_asc",
  title_desc = "title_desc",
  viewCount_asc = "viewCount_asc",
  viewCount_desc = "viewCount_desc",
}

/**
 * Auto generated sort type
 */
export enum _BookingSort {
  createdAt_asc = "createdAt_asc",
  createdAt_desc = "createdAt_desc",
  productStartDate_asc = "productStartDate_asc",
  productStartDate_desc = "productStartDate_desc",
  updatedAt_asc = "updatedAt_asc",
  updatedAt_desc = "updatedAt_desc",
}

/**
 * Auto generated sort type
 */
export enum _INotificationHistoryItemSort {
  createdAt_asc = "createdAt_asc",
  createdAt_desc = "createdAt_desc",
  sender_asc = "sender_asc",
  sender_desc = "sender_desc",
  successCount_asc = "successCount_asc",
  successCount_desc = "successCount_desc",
}

/**
 * Auto generated sort type
 */
export enum _ITemplateSort {
  createdAt_asc = "createdAt_asc",
  createdAt_desc = "createdAt_desc",
  name_asc = "name_asc",
  name_desc = "name_desc",
}

/**
 * Auto generated sort type
 */
export enum _NewsSort {
  createdAt_asc = "createdAt_asc",
  createdAt_desc = "createdAt_desc",
  isNotice_asc = "isNotice_asc",
  isNotice_desc = "isNotice_desc",
  likeCount_asc = "likeCount_asc",
  likeCount_desc = "likeCount_desc",
  subTitle_asc = "subTitle_asc",
  subTitle_desc = "subTitle_desc",
  title_asc = "title_asc",
  title_desc = "title_desc",
  viewCount_asc = "viewCount_asc",
  viewCount_desc = "viewCount_desc",
}

/**
 * Auto generated sort type
 */
export enum _PaymentSort {
  createdAt_asc = "createdAt_asc",
  createdAt_desc = "createdAt_desc",
}

/**
 * Auto generated sort type
 */
export enum _PortfolioSort {
  createdAt_asc = "createdAt_asc",
  createdAt_desc = "createdAt_desc",
  isNotice_asc = "isNotice_asc",
  isNotice_desc = "isNotice_desc",
  likeCount_asc = "likeCount_asc",
  likeCount_desc = "likeCount_desc",
  subTitle_asc = "subTitle_asc",
  subTitle_desc = "subTitle_desc",
  title_asc = "title_asc",
  title_desc = "title_desc",
  viewCount_asc = "viewCount_asc",
  viewCount_desc = "viewCount_desc",
}

/**
 * Auto generated sort type
 */
export enum _ProductReviewSort {
  createdAt_asc = "createdAt_asc",
  createdAt_desc = "createdAt_desc",
  isNotice_asc = "isNotice_asc",
  isNotice_desc = "isNotice_desc",
  likeCount_asc = "likeCount_asc",
  likeCount_desc = "likeCount_desc",
  subTitle_asc = "subTitle_asc",
  subTitle_desc = "subTitle_desc",
  title_asc = "title_asc",
  title_desc = "title_desc",
  viewCount_asc = "viewCount_asc",
  viewCount_desc = "viewCount_desc",
}

/**
 * Auto generated sort type
 */
export enum _ProductSort {
  address_asc = "address_asc",
  address_desc = "address_desc",
  createdAt_asc = "createdAt_asc",
  createdAt_desc = "createdAt_desc",
  isNotice_asc = "isNotice_asc",
  isNotice_desc = "isNotice_desc",
  likeCount_asc = "likeCount_asc",
  likeCount_desc = "likeCount_desc",
  rating_asc = "rating_asc",
  rating_desc = "rating_desc",
  reviewCount_asc = "reviewCount_asc",
  reviewCount_desc = "reviewCount_desc",
  subTitle_asc = "subTitle_asc",
  subTitle_desc = "subTitle_desc",
  title_asc = "title_asc",
  title_desc = "title_desc",
  viewCount_asc = "viewCount_asc",
  viewCount_desc = "viewCount_desc",
}

/**
 * Auto generated sort type
 */
export enum _QnaSort {
  createdAt_asc = "createdAt_asc",
  createdAt_desc = "createdAt_desc",
  isNotice_asc = "isNotice_asc",
  isNotice_desc = "isNotice_desc",
  likeCount_asc = "likeCount_asc",
  likeCount_desc = "likeCount_desc",
  subTitle_asc = "subTitle_asc",
  subTitle_desc = "subTitle_desc",
  title_asc = "title_asc",
  title_desc = "title_desc",
  viewCount_asc = "viewCount_asc",
  viewCount_desc = "viewCount_desc",
}

/**
 * Auto generated sort type
 */
export enum _QuestionSort {
  createdAt_asc = "createdAt_asc",
  createdAt_desc = "createdAt_desc",
  isNotice_asc = "isNotice_asc",
  isNotice_desc = "isNotice_desc",
  likeCount_asc = "likeCount_asc",
  likeCount_desc = "likeCount_desc",
  subTitle_asc = "subTitle_asc",
  subTitle_desc = "subTitle_desc",
  title_asc = "title_asc",
  title_desc = "title_desc",
  viewCount_asc = "viewCount_asc",
  viewCount_desc = "viewCount_desc",
}

/**
 * Auto generated sort type
 */
export enum _SellerSort {
  createdAt_asc = "createdAt_asc",
  createdAt_desc = "createdAt_desc",
  name_asc = "name_asc",
  name_desc = "name_desc",
  productCount_asc = "productCount_asc",
  productCount_desc = "productCount_desc",
  profileImg_asc = "profileImg_asc",
  profileImg_desc = "profileImg_desc",
  resignDate_asc = "resignDate_asc",
  resignDate_desc = "resignDate_desc",
}

/**
 * Auto generated sort type
 */
export enum _SettlementSort {
  createdAt_asc = "createdAt_asc",
  createdAt_desc = "createdAt_desc",
}

/**
 * Auto generated sort type
 */
export enum _SystemNotiSort {
  createdAt_asc = "createdAt_asc",
  createdAt_desc = "createdAt_desc",
}

/**
 * Auto generated sort type
 */
export enum _UserSort {
  createdAt_asc = "createdAt_asc",
  createdAt_desc = "createdAt_desc",
  name_asc = "name_asc",
  name_desc = "name_desc",
  productCount_asc = "productCount_asc",
  productCount_desc = "productCount_desc",
  profileImg_asc = "profileImg_asc",
  profileImg_desc = "profileImg_desc",
  resignDate_asc = "resignDate_asc",
  resignDate_desc = "resignDate_desc",
}

export interface AddUserInput {
  lang?: Lang | null;
  guideLicenses?: FileCreateInput[] | null;
  nickName: string;
  busiRegistration?: FileCreateInput | null;
  bankImg?: FileCreateInput | null;
  guideLicense?: FileCreateInput | null;
  address_detail: string;
  name: string;
  phoneNumber: string;
  email: any;
  pw: string;
  role: UserRole;
  brith_date?: string | null;
  address: string;
  acceptSms?: boolean | null;
  acceptEamil?: boolean | null;
  is_froreginer?: boolean | null;
  gender?: GENDER | null;
  busi_contact?: string | null;
  busi_num?: string | null;
  is_priv_corper?: boolean | null;
  busi_name?: string | null;
  busi_address?: string | null;
  busi_address_detail?: string | null;
  account_number?: string | null;
  busi_department?: string | null;
  bank_name?: string | null;
  partnerName?: string | null;
  manageContact?: string | null;
  manageName?: string | null;
}

export interface AddtionalFeesUpdateInput {
  feeName: string;
  target: TargetStatus;
  type: AddtionalFeesStatus;
  feePercent?: number | null;
  fee?: number | null;
}

export interface AnnounceCreateInput {
  title: string;
  contents?: string | null;
  isNotice?: boolean | null;
  isOpen?: boolean | null;
  summary?: string | null;
  subTitle?: string | null;
  keyWards?: string[] | null;
  attachFiles?: FileCreateInput[] | null;
  thumb?: FileCreateInput | null;
  type: AnnounceType;
}

export interface AnnounceUpdateInput {
  title?: string | null;
  contents?: string | null;
  isNotice?: boolean | null;
  isOpen?: boolean | null;
  summary?: string | null;
  subTitle?: string | null;
  keyWards?: string[] | null;
  attachFiles?: FileUpdateInput[] | null;
  thumb?: FileUpdateInput | null;
  type?: AnnounceType | null;
}

export interface AnswerCreateInput {
  content: string;
}

export interface AnswerUpdateInput {
  content?: string | null;
}

export interface BankInfoInput {
  accountHolder?: string | null;
  accountNumber?: string | null;
  bankName?: string | null;
}

export interface BankRefundInput {
  bookingId: string;
  cancelPrice: number;
  reqStatus: BookingStatus;
  cancelMemo?: string | null;
}

export interface BankTransInfoInput {
  accountHolder?: string | null;
  accountNumber?: string | null;
  bankName?: string | null;
  bankTransfter?: string | null;
}

export interface BannerInput {
  img: FileCreateInput;
  link: string;
  target: string;
  use: boolean;
}

export interface BoardTarget {
  type: BoardType;
  id: string;
}

export interface BookingCancelByHandInput {
  bookingId: string;
  cancelPrice: number;
  reqStatus: BookingStatus;
  reason: string;
}

export interface BookingCompleteByHandInput {
  bookingId: string;
  isIgnoreExpired: boolean;
}

export interface BookingCreateByHandInput {
  product: string;
  message?: string | null;
  status: BookingStatus;
  babyCount: number;
  kidCount: number;
  adultCount: number;
  name: string;
  memo?: string | null;
  email?: string | null;
  phoneNumber: string;
  gender?: string | null;
}

export interface BookingUpdateInput {
  memo?: string | null;
  message?: string | null;
  babyCount?: number | null;
  kidCount?: number | null;
  adultCount?: number | null;
  name?: string | null;
  email?: string | null;
  phoneNumber?: string | null;
  travelers?: TravelerInput[] | null;
}

export interface BookingsCreateInput {
  bankTransfter?: BankTransInfoInput | null;
  payMethod: PayMethod;
  product: string;
  message?: string | null;
  babyCount: number;
  kidCount: number;
  adultCount: number;
  name: string;
  email: string;
  phoneNumber: string;
  bookerInclue?: boolean | null;
}

export interface CategoryCreateInput {
  label: string;
  type: CategoryType;
}

export interface CategoryUpdateInput {
  label?: string | null;
  localeLabel?: LocaleInput | null;
}

export interface FeePolicyUpdateInput {
  niceCardPercent?: number | null;
  jandaCardPercent?: number | null;
  cardPercent?: number | null;
  bankPercent?: number | null;
  storePercent?: number | null;
  addtionalFees?: AddtionalFeesUpdateInput[] | null;
}

export interface FileCreateInput {
  name?: string | null;
  description?: string | null;
  extension?: string | null;
  fileType?: string | null;
  uri: string;
  owner?: string | null;
}

export interface FileUpdateInput {
  name?: string | null;
  description?: string | null;
  extension?: string | null;
  fileType?: string | null;
  uri: string;
  owner?: string | null;
}

export interface GqlTagInput {
  key: string;
  value: string;
}

export interface GroupCreateInput {
  target: string;
  key: string;
  label: string;
  members: string[];
  tags?: GqlTagInput[] | null;
}

export interface GroupUpdateInput {
  label?: string | null;
  members?: string[] | null;
  tags?: GqlTagInput[] | null;
}

export interface HomepageUpdateInput {
  logo?: FileUpdateInput | null;
  siteDesc?: string | null;
  siteKeyWards?: string[] | null;
  siteName?: string | null;
  signUpRedirect?: string | null;
  blacklist?: string[] | null;
  productSamples?: string[] | null;
  loginRedirect?: string | null;
  loginOutRedirect?: string | null;
  PrivacyPolicy?: string | null;
  usePolicy?: string | null;
  partnerBpolicy?: string | null;
  refundPolicy?: string | null;
  travelerPolicy?: string | null;
  partnerPolicy?: string | null;
  marketingPolic?: string | null;
  tourismbusinessNumber?: string | null;
  thirdPolicy?: string | null;
  ceoName?: string | null;
  address?: string | null;
  addressUrl?: string | null;
  contact?: string | null;
  busiNumber?: string | null;
  email?: string | null;
  openTime?: string | null;
  logoTop?: FileUpdateInput | null;
  logoBottom?: FileUpdateInput | null;
  degitalSalesNumber?: string | null;
  copyRight?: string | null;
  bannerA?: BannerInput | null;
  bannerB?: BannerInput | null;
  instaLink?: string | null;
  facebookLink?: string | null;
  twitterLink?: string | null;
  blogLink?: string | null;
  modal?: ModalInput[] | null;
  partnerFooter?: FileUpdateInput[] | null;
  bankInfo?: BankInfoInput | null;
}

export interface ItineraryCreateInput {
  title: string;
  contents?: string[] | null;
  summary?: string | null;
  subTitle?: string | null;
  keyWards?: string[] | null;
  attachFiles?: FileCreateInput[] | null;
  thumb?: FileCreateInput | null;
  images?: FileCreateInput[] | null;
  date?: any | null;
}

export interface ItineraryUpdateInput {
  title: string;
  contents?: string[] | null;
  isOpen?: boolean | null;
  summary?: string | null;
  subTitle?: string | null;
  keyWards?: string[] | null;
  attachFiles?: FileUpdateInput[] | null;
  thumb?: FileUpdateInput | null;
  images?: FileUpdateInput[] | null;
  date?: any | null;
}

export interface LocaleInput {
  ko: string;
  en: string;
  ja: string;
  chi: string;
}

export interface ModalInput {
  _id?: string | null;
  createdAt?: string | null;
  updatedAt?: string | null;
  isDeleted?: boolean | null;
  link?: string | null;
  startDate: any;
  endDate: any;
  open?: boolean | null;
  title?: string | null;
  content?: string | null;
  linkBehavior?: LinkBehavior | null;
  style: any;
  priority?: number | null;
}

export interface NewsCreateInput {
  title: string;
  content: string;
  isNotice?: boolean | null;
  isOpen?: boolean | null;
  summary?: string | null;
  subTitle?: string | null;
  keyWards?: string[] | null;
  attachFiles?: FileCreateInput[] | null;
  thumb?: FileCreateInput | null;
  type: NEWS_TYPE;
}

export interface NewsUpdateInput {
  title?: string | null;
  contents: string;
  isNotice?: boolean | null;
  isOpen?: boolean | null;
  summary?: string | null;
  subTitle?: string | null;
  keyWards?: string[] | null;
  attachFiles?: FileUpdateInput[] | null;
  thumb?: FileUpdateInput | null;
  type: NEWS_TYPE;
}

export interface NotificationTriggerCreateInput {
  sender?: string | null;
  event: NotificationTriggerEvent;
  isEnabled: boolean;
  tags?: GqlTagInput[] | null;
}

export interface PageInfoCreateInput {
  key: string;
  value: any;
}

export interface PageInfoUpdateInput {
  key?: string | null;
  value?: any | null;
}

export interface PortfolioCreateInput {
  title: string;
  contents: string;
  isNotice?: boolean | null;
  isOpen?: boolean | null;
  summary?: string | null;
  subTitle?: string | null;
  keyWards?: string[] | null;
  attachFiles?: FileCreateInput[] | null;
  thumb?: FileCreateInput | null;
  categoryId: string;
}

export interface PortfolioUpdateInput {
  title?: string | null;
  contents?: string | null;
  isNotice?: boolean | null;
  isOpen?: boolean | null;
  summary?: string | null;
  subTitle?: string | null;
  keyWards?: string[] | null;
  attachFiles?: FileUpdateInput[] | null;
  thumb?: FileUpdateInput | null;
  categoryId?: string | null;
}

export interface ProductCreateInput {
  title: string;
  lang: Lang;
  contents: string;
  isNotice?: boolean | null;
  isOpen?: boolean | null;
  summary?: string | null;
  subTitle?: string | null;
  keyWards?: string[] | null;
  attachFiles?: FileCreateInput[] | null;
  thumb?: FileCreateInput | null;
  categoryId: string;
  itinerary: ItineraryCreateInput[];
  inOrNor: string;
  info: string;
  caution?: string | null;
  images?: FileCreateInput[] | null;
  address: string;
  regionId?: string | null;
  startPoint: string;
  maxMember: number;
  minMember: number;
  adult_price: number;
  kids_price: number;
  baby_price: number;
  type?: ProductType | null;
}

export interface ProductReviewCreateInput {
  title: string;
  contents?: string | null;
  isNotice?: boolean | null;
  isOpen?: boolean | null;
  summary?: string | null;
  subTitle?: string | null;
  keyWards?: string[] | null;
  attachFiles?: FileCreateInput[] | null;
  thumb?: FileCreateInput | null;
  product: string;
  rating: number;
}

export interface ProductReviewUpdateInput {
  title?: string | null;
  contents?: string | null;
  isNotice?: boolean | null;
  isOpen?: boolean | null;
  summary?: string | null;
  subTitle?: string | null;
  keyWards?: string[] | null;
  attachFiles?: FileUpdateInput[] | null;
  thumb?: FileUpdateInput | null;
  rating?: number | null;
}

export interface ProductUpdateInput {
  lang?: Lang | null;
  title?: string | null;
  contents?: string | null;
  isNotice?: boolean | null;
  isOpen?: boolean | null;
  summary?: string | null;
  subTitle?: string | null;
  keyWards?: string[] | null;
  attachFiles?: FileUpdateInput[] | null;
  thumb?: FileUpdateInput | null;
  productId?: string | null;
  categoryId?: string | null;
  status?: ProductStatus | null;
  itinerary?: ItineraryUpdateInput[] | null;
  inOrNor?: string | null;
  info?: string | null;
  caution?: string | null;
  images?: FileUpdateInput[] | null;
  address?: string | null;
  startPoint?: string | null;
  maxMember?: number | null;
  minMember?: number | null;
  adult_price?: number | null;
  kids_price?: number | null;
  baby_price?: number | null;
  type?: ProductType | null;
  adminMemo?: string | null;
  regionId?: string | null;
}

export interface ProductUpdateReqInput {
  title?: string | null;
  contents?: string | null;
  isNotice?: boolean | null;
  isOpen?: boolean | null;
  summary?: string | null;
  subTitle?: string | null;
  keyWards?: string[] | null;
  attachFiles?: FileUpdateInput[] | null;
  thumb?: FileUpdateInput | null;
  productId?: string | null;
  categoryId?: string | null;
  status?: ProductStatus | null;
  itinerary?: ItineraryUpdateInput[] | null;
  inOrNor?: string | null;
  info?: string | null;
  caution?: string | null;
  images?: FileUpdateInput[] | null;
  address?: string | null;
  startPoint?: string | null;
  maxMember?: number | null;
  minMember?: number | null;
  adult_price?: number | null;
  kids_price?: number | null;
  baby_price?: number | null;
  type?: ProductType | null;
  requestMemo?: string | null;
  adminMemo?: string | null;
  regionId?: string | null;
}

export interface QnaCreateInput {
  title: string;
  contents?: string | null;
  isNotice?: boolean | null;
  isOpen?: boolean | null;
  summary?: string | null;
  subTitle?: string | null;
  keyWards?: string[] | null;
  attachFiles?: FileCreateInput[] | null;
  thumb?: FileCreateInput | null;
  categoryId: string;
}

export interface QnaUpdateInput {
  title?: string | null;
  contents?: string | null;
  isNotice?: boolean | null;
  isOpen?: boolean | null;
  summary?: string | null;
  subTitle?: string | null;
  keyWards?: string[] | null;
  attachFiles?: FileUpdateInput[] | null;
  thumb?: FileUpdateInput | null;
  categoryId?: string | null;
}

export interface QuestionCreateInput {
  title: string;
  contents?: string | null;
  isNotice?: boolean | null;
  isOpen?: boolean | null;
  summary?: string | null;
  subTitle?: string | null;
  keyWards?: string[] | null;
  attachFiles?: FileCreateInput[] | null;
  thumb?: FileCreateInput | null;
  productId?: string | null;
}

export interface QuestionUpdateInput {
  title?: string | null;
  contents?: string | null;
  isNotice?: boolean | null;
  isOpen?: boolean | null;
  summary?: string | null;
  subTitle?: string | null;
  keyWards?: string[] | null;
  attachFiles?: FileUpdateInput[] | null;
  thumb?: FileUpdateInput | null;
  productId?: string | null;
  status?: QuestionStatus | null;
}

/**
 * 수신자번호 + 치환문자열 객체 INPUT
 */
export interface ReceiverWithReplacementSetsInput {
  receivers: string[];
  replacementSets: ReplacementSetInput[];
}

export interface ReplacementSetInput {
  key: string;
  value: string;
}

export interface SmsSendInput {
  title?: string | null;
  content: string;
  receivers: string[];
  tempalteId?: string | null;
  replacements?: ReplacementSetInput[] | null;
}

export interface SmsSendWithTemplateInput {
  templateId?: string | null;
  content?: string | null;
  sender: string;
  replacements: ReceiverWithReplacementSetsInput[];
}

export interface SmsTemplateCreateInput {
  name: string;
  content: string;
  description?: string | null;
  trigger?: NotificationTriggerCreateInput | null;
  tags?: GqlTagInput[] | null;
}

export interface SmsTemplateUpdateInput {
  content?: string | null;
  name?: string | null;
  description?: string | null;
  trigger?: NotificationTriggerCreateInput | null;
  tags?: GqlTagInput[] | null;
}

export interface TravelerInput {
  name?: string | null;
  phoneNumber: string;
  gender?: GENDER | null;
  age: string;
}

export interface UserUpdateInput {
  lang?: Lang | null;
  guideLicenses?: FileCreateInput[] | null;
  busi_department?: string | null;
  nickName?: string | null;
  acceptSms?: boolean | null;
  busiRegistration?: FileCreateInput | null;
  bankImg?: FileCreateInput | null;
  busi_address_detail?: string | null;
  acceptEamil?: boolean | null;
  address_detail?: string | null;
  phoneNumber?: string | null;
  name?: string | null;
  email?: any | null;
  pw?: string | null;
  role?: UserRole | null;
  brith_date?: string | null;
  address?: string | null;
  is_froreginer?: boolean | null;
  gender?: GENDER | null;
  busi_contact?: string | null;
  busi_num?: string | null;
  is_priv_corper?: boolean | null;
  busi_name?: string | null;
  busi_address?: string | null;
  account_number?: string | null;
  bank_name?: string | null;
  profileImg?: FileCreateInput | null;
  partnerName?: string | null;
  manageName?: string | null;
  manageContact?: string | null;
  isVerifiedManager?: boolean | null;
  status?: UserStatus | null;
  keywards?: string[] | null;
  guideLicense?: FileCreateInput | null;
}

export interface _AnnounceFilter {
  AND?: _AnnounceFilter[] | null;
  OR?: _AnnounceFilter[] | null;
  no_eq?: string | null;
  no_not_eq?: string | null;
  title_eq?: string | null;
  title_not_eq?: string | null;
  title_contains?: string | null;
  title_not_contains?: string | null;
  title_in?: string[] | null;
  title_not_in?: string[] | null;
  authorEmail_eq?: string | null;
  authorEmail_not_eq?: string | null;
  authorEmail_in?: string[] | null;
  authorNick_eq?: string | null;
  authorNick_not_eq?: string | null;
  isNotice_eq?: boolean | null;
  isNotice_not_eq?: boolean | null;
  isOpen_eq?: boolean | null;
  isOpen_not_eq?: boolean | null;
  subTitle_eq?: string | null;
  subTitle_not_eq?: string | null;
  subTitle_contains?: string | null;
  subTitle_not_contains?: string | null;
  subTitle_in?: string[] | null;
  subTitle_not_in?: string[] | null;
  keyWards_eq?: string | null;
  keyWards_not_eq?: string | null;
  keyWards_in?: string[] | null;
  keyWards_contains?: string | null;
  _id_eq?: string | null;
  _id_not_eq?: string | null;
  _id_in?: string[] | null;
  createdAt_eq?: any | null;
  createdAt_not_eq?: any | null;
  createdAt_lte?: any | null;
  createdAt_lt?: any | null;
  createdAt_gte?: any | null;
  createdAt_gt?: any | null;
}

export interface _BoardFilter {
  AND?: _BoardFilter[] | null;
  OR?: _BoardFilter[] | null;
  title_eq?: string | null;
  title_not_eq?: string | null;
  title_contains?: string | null;
  title_not_contains?: string | null;
  title_in?: string[] | null;
  title_not_in?: string[] | null;
  authorEmail_eq?: string | null;
  authorEmail_not_eq?: string | null;
  authorEmail_in?: string[] | null;
  authorNick_eq?: string | null;
  authorNick_not_eq?: string | null;
  isNotice_eq?: boolean | null;
  isNotice_not_eq?: boolean | null;
  isOpen_eq?: boolean | null;
  isOpen_not_eq?: boolean | null;
  subTitle_eq?: string | null;
  subTitle_not_eq?: string | null;
  subTitle_contains?: string | null;
  subTitle_not_contains?: string | null;
  subTitle_in?: string[] | null;
  subTitle_not_in?: string[] | null;
  keyWards_eq?: string | null;
  keyWards_not_eq?: string | null;
  keyWards_in?: string[] | null;
  keyWards_contains?: string | null;
  _id_eq?: string | null;
  _id_not_eq?: string | null;
  _id_in?: string[] | null;
  createdAt_eq?: any | null;
  createdAt_not_eq?: any | null;
  createdAt_lte?: any | null;
  createdAt_lt?: any | null;
  createdAt_gte?: any | null;
  createdAt_gt?: any | null;
}

export interface _BookingFilter {
  AND?: _BookingFilter[] | null;
  OR?: _BookingFilter[] | null;
  status_eq?: string | null;
  status_not_eq?: string | null;
  status_in?: string[] | null;
  code_eq?: string | null;
  code_not_eq?: string | null;
  groupCode_eq?: string | null;
  groupCode_not_eq?: string | null;
  groupCode_in?: string[] | null;
  product_eq?: string | null;
  product_not_eq?: string | null;
  product_in?: string[] | null;
  seller_eq?: string | null;
  seller_not_eq?: string | null;
  seller_in?: string[] | null;
  booker_eq?: string | null;
  booker_not_eq?: string | null;
  booker_in?: string[] | null;
  name_eq?: string | null;
  name_not_eq?: string | null;
  name_in?: string[] | null;
  name_contains?: string | null;
  byHand_eq?: boolean | null;
  byHand_not_eq?: boolean | null;
  isCancelRequest_eq?: boolean | null;
  isCancelRequest_not_eq?: boolean | null;
  phoneNumber_eq?: string | null;
  phoneNumber_not_eq?: string | null;
  phoneNumber_in?: string[] | null;
  phoneNumber_contains?: string | null;
  _id_eq?: string | null;
  _id_not_eq?: string | null;
  _id_in?: string[] | null;
  createdAt_eq?: any | null;
  createdAt_not_eq?: any | null;
  createdAt_lte?: any | null;
  createdAt_lt?: any | null;
  createdAt_gte?: any | null;
  createdAt_gt?: any | null;
  exField__determined_eq?: boolean | null;
  exField__determined_not_eq?: boolean | null;
  exField__title_eq?: string | null;
  exField__title_not_eq?: string | null;
  exField__title_contains?: string | null;
  exField__title_not_contains?: string | null;
  exField__title_in?: string[] | null;
  exField__title_not_in?: string[] | null;
  exField__code_eq?: string | null;
  exField__code_not_eq?: string | null;
  exField__code_contains?: string | null;
  exField__code_not_contains?: string | null;
  exField__code_in?: string[] | null;
  exField__code_not_in?: string[] | null;
  exField__status_eq?: ProductStatus | null;
  exField__status_not_eq?: ProductStatus | null;
  exField__status_in?: ProductStatus[] | null;
  exField__bookerName_eq?: string | null;
  exField__bookerName_not_eq?: string | null;
  exField__bookerName_contains?: string | null;
  exField__bookerName_not_contains?: string | null;
  exField__bookerName_in?: string[] | null;
  exField__bookerName_not_in?: string[] | null;
  exField__sellerName_eq?: string | null;
  exField__sellerName_not_eq?: string | null;
  exField__sellerName_contains?: string | null;
  exField__sellerName_not_contains?: string | null;
  exField__sellerName_in?: string[] | null;
  exField__sellerName_not_in?: string[] | null;
  exField__sellerNickName_eq?: string | null;
  exField__sellerNickName_not_eq?: string | null;
  exField__sellerNickName_contains?: string | null;
  exField__sellerNickName_not_contains?: string | null;
  exField__sellerNickName_in?: string[] | null;
  exField__sellerNickName_not_in?: string[] | null;
}

export interface _INotificationHistoryItemFilter {
  AND?: _INotificationHistoryItemFilter[] | null;
  OR?: _INotificationHistoryItemFilter[] | null;
  method_eq?: NotificationMethod | null;
  method_not_eq?: NotificationMethod | null;
  method_in?: NotificationMethod[] | null;
  method_not_in?: NotificationMethod[] | null;
  sender_eq?: string | null;
  sender_not_eq?: string | null;
  sender_in?: string[] | null;
  sender_not_in?: string[] | null;
  sender_contains?: string | null;
  sender_not_contains?: string | null;
  _id_eq?: string | null;
  _id_not_eq?: string | null;
  _id_in?: string[] | null;
  createdAt_eq?: any | null;
  createdAt_not_eq?: any | null;
  createdAt_lte?: any | null;
  createdAt_lt?: any | null;
  createdAt_gte?: any | null;
  createdAt_gt?: any | null;
}

export interface _ITemplateFilter {
  AND?: _ITemplateFilter[] | null;
  OR?: _ITemplateFilter[] | null;
  _id_eq?: string | null;
  _id_not_eq?: string | null;
  _id_in?: string[] | null;
  createdAt_eq?: any | null;
  createdAt_not_eq?: any | null;
  createdAt_lte?: any | null;
  createdAt_lt?: any | null;
  createdAt_gte?: any | null;
  createdAt_gt?: any | null;
}

export interface _NewsFilter {
  AND?: _NewsFilter[] | null;
  OR?: _NewsFilter[] | null;
  type_eq?: string | null;
  type_not_eq?: string | null;
  type_in?: string[] | null;
  title_eq?: string | null;
  title_not_eq?: string | null;
  title_contains?: string | null;
  title_not_contains?: string | null;
  title_in?: string[] | null;
  title_not_in?: string[] | null;
  authorEmail_eq?: string | null;
  authorEmail_not_eq?: string | null;
  authorEmail_in?: string[] | null;
  authorNick_eq?: string | null;
  authorNick_not_eq?: string | null;
  isNotice_eq?: boolean | null;
  isNotice_not_eq?: boolean | null;
  isOpen_eq?: boolean | null;
  isOpen_not_eq?: boolean | null;
  subTitle_eq?: string | null;
  subTitle_not_eq?: string | null;
  subTitle_contains?: string | null;
  subTitle_not_contains?: string | null;
  subTitle_in?: string[] | null;
  subTitle_not_in?: string[] | null;
  keyWards_eq?: string | null;
  keyWards_not_eq?: string | null;
  keyWards_in?: string[] | null;
  keyWards_contains?: string | null;
  _id_eq?: string | null;
  _id_not_eq?: string | null;
  _id_in?: string[] | null;
  createdAt_eq?: any | null;
  createdAt_not_eq?: any | null;
  createdAt_lte?: any | null;
  createdAt_lt?: any | null;
  createdAt_gte?: any | null;
  createdAt_gt?: any | null;
}

export interface _PaymentFilter {
  AND?: _PaymentFilter[] | null;
  OR?: _PaymentFilter[] | null;
  products_eq?: string | null;
  products_not_eq?: string | null;
  products_in?: string[] | null;
  bookings_eq?: string | null;
  bookings_not_eq?: string | null;
  bookings_in?: string[] | null;
  provider_eq?: string | null;
  provider_not_eq?: string | null;
  provider_in?: string[] | null;
  customer_eq?: string | null;
  customer_not_eq?: string | null;
  customer_in?: string[] | null;
  _id_eq?: string | null;
  _id_not_eq?: string | null;
  _id_in?: string[] | null;
  createdAt_eq?: any | null;
  createdAt_not_eq?: any | null;
  createdAt_lte?: any | null;
  createdAt_lt?: any | null;
  createdAt_gte?: any | null;
  createdAt_gt?: any | null;
}

export interface _PortfolioFilter {
  AND?: _PortfolioFilter[] | null;
  OR?: _PortfolioFilter[] | null;
  categoryId_eq?: string | null;
  categoryId_not_eq?: string | null;
  categoryId_in?: string[] | null;
  pCategoryId_eq?: string | null;
  pCategoryId_not_eq?: string | null;
  pCategoryId_in?: string[] | null;
  title_eq?: string | null;
  title_not_eq?: string | null;
  title_contains?: string | null;
  title_not_contains?: string | null;
  title_in?: string[] | null;
  title_not_in?: string[] | null;
  authorEmail_eq?: string | null;
  authorEmail_not_eq?: string | null;
  authorEmail_in?: string[] | null;
  authorNick_eq?: string | null;
  authorNick_not_eq?: string | null;
  isNotice_eq?: boolean | null;
  isNotice_not_eq?: boolean | null;
  isOpen_eq?: boolean | null;
  isOpen_not_eq?: boolean | null;
  subTitle_eq?: string | null;
  subTitle_not_eq?: string | null;
  subTitle_contains?: string | null;
  subTitle_not_contains?: string | null;
  subTitle_in?: string[] | null;
  subTitle_not_in?: string[] | null;
  keyWards_eq?: string | null;
  keyWards_not_eq?: string | null;
  keyWards_in?: string[] | null;
  keyWards_contains?: string | null;
  _id_eq?: string | null;
  _id_not_eq?: string | null;
  _id_in?: string[] | null;
  createdAt_eq?: any | null;
  createdAt_not_eq?: any | null;
  createdAt_lte?: any | null;
  createdAt_lt?: any | null;
  createdAt_gte?: any | null;
  createdAt_gt?: any | null;
}

export interface _ProductFilter {
  AND?: _ProductFilter[] | null;
  OR?: _ProductFilter[] | null;
  rating_eq?: string | null;
  rating_not_eq?: string | null;
  rating_gte?: string | null;
  rating_lte?: string | null;
  reviewCount_eq?: string | null;
  reviewCount_not_eq?: string | null;
  reviewCount_gte?: string | null;
  reviewCount_lte?: string | null;
  determined_eq?: boolean | null;
  determined_not_eq?: boolean | null;
  code_eq?: string | null;
  code_not_eq?: string | null;
  code_contains?: string | null;
  code_not_contains?: string | null;
  code_in?: string[] | null;
  code_not_in?: string[] | null;
  categoryId_eq?: string | null;
  categoryId_not_eq?: string | null;
  categoryId_in?: string[] | null;
  regionLabel_eq?: string | null;
  regionLabel_not_eq?: string | null;
  regionLabel_in?: string[] | null;
  settlementId_eq?: string | null;
  settlementId_not_eq?: string | null;
  settlementId_in?: string[] | null;
  status_eq?: string | null;
  status_not_eq?: string | null;
  status_in?: string[] | null;
  lang_eq?: string | null;
  lang_not_eq?: string | null;
  lang_in?: string[] | null;
  address_eq?: string | null;
  address_not_eq?: string | null;
  address_contains?: string | null;
  address_not_contains?: string | null;
  address_in?: string[] | null;
  address_not_in?: string[] | null;
  elseReq_eq?: ProductType | null;
  elseReq_not_eq?: ProductType | null;
  type_eq?: ProductType | null;
  type_not_eq?: ProductType | null;
  type_in?: ProductType[] | null;
  groupCode_eq?: string | null;
  groupCode_not_eq?: string | null;
  startDateFn_eq?: any | null;
  startDateFn_not_eq?: any | null;
  startDateFn_lte?: any | null;
  startDateFn_lt?: any | null;
  startDateFn_gte?: any | null;
  startDateFn_gt?: any | null;
  startDate_eq?: any | null;
  startDate_not_eq?: any | null;
  startDate_lte?: any | null;
  startDate_lt?: any | null;
  startDate_gte?: any | null;
  startDate_gt?: any | null;
  endDate_eq?: any | null;
  endDate_not_eq?: any | null;
  endDate_lte?: any | null;
  endDate_lt?: any | null;
  endDate_gte?: any | null;
  endDate_gt?: any | null;
  endDateFn_eq?: any | null;
  endDateFn_not_eq?: any | null;
  endDateFn_lte?: any | null;
  endDateFn_lt?: any | null;
  endDateFn_gte?: any | null;
  endDateFn_gt?: any | null;
  title_eq?: string | null;
  title_not_eq?: string | null;
  title_contains?: string | null;
  title_not_contains?: string | null;
  title_in?: string[] | null;
  title_not_in?: string[] | null;
  authorEmail_eq?: string | null;
  authorEmail_not_eq?: string | null;
  authorEmail_in?: string[] | null;
  authorNick_eq?: string | null;
  authorNick_not_eq?: string | null;
  isNotice_eq?: boolean | null;
  isNotice_not_eq?: boolean | null;
  isOpen_eq?: boolean | null;
  isOpen_not_eq?: boolean | null;
  subTitle_eq?: string | null;
  subTitle_not_eq?: string | null;
  subTitle_contains?: string | null;
  subTitle_not_contains?: string | null;
  subTitle_in?: string[] | null;
  subTitle_not_in?: string[] | null;
  keyWards_eq?: string | null;
  keyWards_not_eq?: string | null;
  keyWards_in?: string[] | null;
  keyWards_contains?: string | null;
  _id_eq?: string | null;
  _id_not_eq?: string | null;
  _id_in?: string[] | null;
  createdAt_eq?: any | null;
  createdAt_not_eq?: any | null;
  createdAt_lte?: any | null;
  createdAt_lt?: any | null;
  createdAt_gte?: any | null;
  createdAt_gt?: any | null;
  exField__sellerName_eq?: string | null;
  exField__sellerName_not_eq?: string | null;
  exField__sellerName_contains?: string | null;
  exField__sellerName_not_contains?: string | null;
  exField__sellerName_in?: string[] | null;
  exField__sellerName_not_in?: string[] | null;
  exField__sellerNickName_eq?: string | null;
  exField__sellerNickName_not_eq?: string | null;
  exField__sellerNickName_contains?: string | null;
  exField__sellerNickName_not_contains?: string | null;
  exField__sellerNickName_in?: string[] | null;
  exField__sellerNickName_not_in?: string[] | null;
  exField__startDate_eq?: any | null;
  exField__startDate_not_eq?: any | null;
  exField__startDate_lte?: any | null;
  exField__startDate_lt?: any | null;
  exField__startDate_gte?: any | null;
  exField__startDate_gt?: any | null;
  exField__endDate_eq?: any | null;
  exField__endDate_not_eq?: any | null;
  exField__endDate_lte?: any | null;
  exField__endDate_lt?: any | null;
  exField__endDate_gte?: any | null;
  exField__endDate_gt?: any | null;
}

export interface _ProductReviewFilter {
  AND?: _ProductReviewFilter[] | null;
  OR?: _ProductReviewFilter[] | null;
  authorName_eq?: string | null;
  authorName_not_eq?: string | null;
  authorName_in?: string[] | null;
  productName_eq?: string | null;
  productName_not_eq?: string | null;
  productName_in?: string[] | null;
  productAuthorName_eq?: string | null;
  productAuthorName_not_eq?: string | null;
  productAuthorName_in?: string[] | null;
  productAuthorId_eq?: string | null;
  productAuthorId_not_eq?: string | null;
  productAuthorId_in?: string[] | null;
  productCode_eq?: string | null;
  productCode_not_eq?: string | null;
  productCode_in?: string[] | null;
  groupCode_eq?: string | null;
  groupCode_not_eq?: string | null;
  groupCode_in?: string[] | null;
  title_eq?: string | null;
  title_not_eq?: string | null;
  title_contains?: string | null;
  title_not_contains?: string | null;
  title_in?: string[] | null;
  title_not_in?: string[] | null;
  authorEmail_eq?: string | null;
  authorEmail_not_eq?: string | null;
  authorEmail_in?: string[] | null;
  authorNick_eq?: string | null;
  authorNick_not_eq?: string | null;
  isNotice_eq?: boolean | null;
  isNotice_not_eq?: boolean | null;
  isOpen_eq?: boolean | null;
  isOpen_not_eq?: boolean | null;
  subTitle_eq?: string | null;
  subTitle_not_eq?: string | null;
  subTitle_contains?: string | null;
  subTitle_not_contains?: string | null;
  subTitle_in?: string[] | null;
  subTitle_not_in?: string[] | null;
  keyWards_eq?: string | null;
  keyWards_not_eq?: string | null;
  keyWards_in?: string[] | null;
  keyWards_contains?: string | null;
  _id_eq?: string | null;
  _id_not_eq?: string | null;
  _id_in?: string[] | null;
  createdAt_eq?: any | null;
  createdAt_not_eq?: any | null;
  createdAt_lte?: any | null;
  createdAt_lt?: any | null;
  createdAt_gte?: any | null;
  createdAt_gt?: any | null;
}

export interface _QnaFilter {
  AND?: _QnaFilter[] | null;
  OR?: _QnaFilter[] | null;
  categoryId_eq?: string | null;
  categoryId_not_eq?: string | null;
  categoryId_in?: string[] | null;
  title_eq?: string | null;
  title_not_eq?: string | null;
  title_contains?: string | null;
  title_not_contains?: string | null;
  title_in?: string[] | null;
  title_not_in?: string[] | null;
  authorEmail_eq?: string | null;
  authorEmail_not_eq?: string | null;
  authorEmail_in?: string[] | null;
  authorNick_eq?: string | null;
  authorNick_not_eq?: string | null;
  isNotice_eq?: boolean | null;
  isNotice_not_eq?: boolean | null;
  isOpen_eq?: boolean | null;
  isOpen_not_eq?: boolean | null;
  subTitle_eq?: string | null;
  subTitle_not_eq?: string | null;
  subTitle_contains?: string | null;
  subTitle_not_contains?: string | null;
  subTitle_in?: string[] | null;
  subTitle_not_in?: string[] | null;
  keyWards_eq?: string | null;
  keyWards_not_eq?: string | null;
  keyWards_in?: string[] | null;
  keyWards_contains?: string | null;
  _id_eq?: string | null;
  _id_not_eq?: string | null;
  _id_in?: string[] | null;
  createdAt_eq?: any | null;
  createdAt_not_eq?: any | null;
  createdAt_lte?: any | null;
  createdAt_lt?: any | null;
  createdAt_gte?: any | null;
  createdAt_gt?: any | null;
}

export interface _QuestionFilter {
  AND?: _QuestionFilter[] | null;
  OR?: _QuestionFilter[] | null;
  categoryId_eq?: string | null;
  categoryId_not_eq?: string | null;
  categoryId_in?: string[] | null;
  code_eq?: string | null;
  code_not_eq?: string | null;
  status_eq?: string | null;
  status_not_eq?: string | null;
  no_eq?: string | null;
  no_not_eq?: string | null;
  title_eq?: string | null;
  title_not_eq?: string | null;
  title_contains?: string | null;
  title_not_contains?: string | null;
  title_in?: string[] | null;
  title_not_in?: string[] | null;
  authorEmail_eq?: string | null;
  authorEmail_not_eq?: string | null;
  authorEmail_in?: string[] | null;
  authorNick_eq?: string | null;
  authorNick_not_eq?: string | null;
  isNotice_eq?: boolean | null;
  isNotice_not_eq?: boolean | null;
  isOpen_eq?: boolean | null;
  isOpen_not_eq?: boolean | null;
  subTitle_eq?: string | null;
  subTitle_not_eq?: string | null;
  subTitle_contains?: string | null;
  subTitle_not_contains?: string | null;
  subTitle_in?: string[] | null;
  subTitle_not_in?: string[] | null;
  keyWards_eq?: string | null;
  keyWards_not_eq?: string | null;
  keyWards_in?: string[] | null;
  keyWards_contains?: string | null;
  _id_eq?: string | null;
  _id_not_eq?: string | null;
  _id_in?: string[] | null;
  createdAt_eq?: any | null;
  createdAt_not_eq?: any | null;
  createdAt_lte?: any | null;
  createdAt_lt?: any | null;
  createdAt_gte?: any | null;
  createdAt_gt?: any | null;
}

export interface _SellerFilter {
  AND?: _SellerFilter[] | null;
  OR?: _SellerFilter[] | null;
  _id_eq?: string | null;
  _id_not_eq?: string | null;
  _id_in?: string[] | null;
  phoneNumber_eq?: string | null;
  phoneNumber_not_eq?: string | null;
  phoneNumber_contains?: string | null;
  email_eq?: string | null;
  email_not_eq?: string | null;
  email_contains?: string | null;
  status_eq?: string | null;
  status_not_eq?: string | null;
  status_contains?: string | null;
  isResigned_eq?: boolean | null;
  isResigned_not_eq?: boolean | null;
  isVerifiedManager_eq?: boolean | null;
  isVerifiedManager_not_eq?: boolean | null;
  role_eq?: string | null;
  role_not_eq?: string | null;
  is_froreginer_eq?: boolean | null;
  is_froreginer_not_eq?: boolean | null;
  gender_eq?: string | null;
  gender_not_eq?: string | null;
  keywards_eq?: string | null;
  keywards_not_eq?: string | null;
  keywards_in?: string[] | null;
  keywards_contains?: string | null;
  keywards_not_in?: string[] | null;
  keywards_not_contains?: string | null;
  keywards_all?: string | null;
  keywardString_eq?: string | null;
  keywardString_not_eq?: string | null;
  keywardString_in?: string[] | null;
  keywardString_contains?: string | null;
  keywardString_not_in?: string[] | null;
  keywardString_not_contains?: string | null;
  keywardString_all?: string | null;
  nickName_eq?: string | null;
  nickName_not_eq?: string | null;
  nickName_in?: string[] | null;
  nickName_contains?: string | null;
  nickName_not_in?: string[] | null;
  nickName_not_contains?: string | null;
  nickName_all?: string | null;
  name_eq?: string | null;
  name_not_eq?: string | null;
  name_contains?: string | null;
  profileImg_eq?: string | null;
  profileImg_not_eq?: string | null;
  createdAt_eq?: any | null;
  createdAt_not_eq?: any | null;
  createdAt_lte?: any | null;
  createdAt_lt?: any | null;
  createdAt_gte?: any | null;
  createdAt_gt?: any | null;
}

export interface _SettlementFilter {
  AND?: _SettlementFilter[] | null;
  OR?: _SettlementFilter[] | null;
  status_eq?: string | null;
  status_not_eq?: string | null;
  status_in?: string[] | null;
  _id_eq?: string | null;
  _id_not_eq?: string | null;
  _id_in?: string[] | null;
  createdAt_eq?: any | null;
  createdAt_not_eq?: any | null;
  createdAt_lte?: any | null;
  createdAt_lt?: any | null;
  createdAt_gte?: any | null;
  createdAt_gt?: any | null;
  exField__title_eq?: string | null;
  exField__title_not_eq?: string | null;
  exField__title_contains?: string | null;
  exField__title_not_contains?: string | null;
  exField__title_in?: string[] | null;
  exField__title_not_in?: string[] | null;
  exField__code_eq?: string | null;
  exField__code_not_eq?: string | null;
  exField__code_contains?: string | null;
  exField__code_not_contains?: string | null;
  exField__code_in?: string[] | null;
  exField__code_not_in?: string[] | null;
  exField__sellerName_eq?: string | null;
  exField__sellerName_not_eq?: string | null;
  exField__sellerName_contains?: string | null;
  exField__sellerName_not_contains?: string | null;
  exField__sellerName_in?: string[] | null;
  exField__sellerName_not_in?: string[] | null;
  exField__sellerNickName_eq?: string | null;
  exField__sellerNickName_not_eq?: string | null;
  exField__sellerNickName_contains?: string | null;
  exField__sellerNickName_not_contains?: string | null;
  exField__sellerNickName_in?: string[] | null;
  exField__sellerNickName_not_in?: string[] | null;
}

export interface _SystemNotiFilter {
  AND?: _SystemNotiFilter[] | null;
  OR?: _SystemNotiFilter[] | null;
  type_eq?: string | null;
  type_not_eq?: string | null;
  type_in?: string[] | null;
  _id_eq?: string | null;
  _id_not_eq?: string | null;
  _id_in?: string[] | null;
  createdAt_eq?: any | null;
  createdAt_not_eq?: any | null;
  createdAt_lte?: any | null;
  createdAt_lt?: any | null;
  createdAt_gte?: any | null;
  createdAt_gt?: any | null;
}

export interface _UserFilter {
  AND?: _UserFilter[] | null;
  OR?: _UserFilter[] | null;
  _id_eq?: string | null;
  _id_not_eq?: string | null;
  _id_in?: string[] | null;
  phoneNumber_eq?: string | null;
  phoneNumber_not_eq?: string | null;
  phoneNumber_contains?: string | null;
  email_eq?: string | null;
  email_not_eq?: string | null;
  email_contains?: string | null;
  status_eq?: string | null;
  status_not_eq?: string | null;
  status_contains?: string | null;
  isResigned_eq?: boolean | null;
  isResigned_not_eq?: boolean | null;
  isVerifiedManager_eq?: boolean | null;
  isVerifiedManager_not_eq?: boolean | null;
  role_eq?: string | null;
  role_not_eq?: string | null;
  is_froreginer_eq?: boolean | null;
  is_froreginer_not_eq?: boolean | null;
  gender_eq?: string | null;
  gender_not_eq?: string | null;
  keywards_eq?: string | null;
  keywards_not_eq?: string | null;
  keywards_in?: string[] | null;
  keywards_contains?: string | null;
  keywards_not_in?: string[] | null;
  keywards_not_contains?: string | null;
  keywards_all?: string | null;
  keywardString_eq?: string | null;
  keywardString_not_eq?: string | null;
  keywardString_in?: string[] | null;
  keywardString_contains?: string | null;
  keywardString_not_in?: string[] | null;
  keywardString_not_contains?: string | null;
  keywardString_all?: string | null;
  nickName_eq?: string | null;
  nickName_not_eq?: string | null;
  nickName_in?: string[] | null;
  nickName_contains?: string | null;
  nickName_not_in?: string[] | null;
  nickName_not_contains?: string | null;
  nickName_all?: string | null;
  name_eq?: string | null;
  name_not_eq?: string | null;
  name_contains?: string | null;
  profileImg_eq?: string | null;
  profileImg_not_eq?: string | null;
  createdAt_eq?: any | null;
  createdAt_not_eq?: any | null;
  createdAt_lte?: any | null;
  createdAt_lt?: any | null;
  createdAt_gte?: any | null;
  createdAt_gt?: any | null;
}

export interface pageInput {
  page: number;
  cntPerPage: number;
}

//==============================================================
// END Enums and Input Objects
//==============================================================
