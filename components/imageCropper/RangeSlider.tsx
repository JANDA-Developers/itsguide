import React from "react";
import { Range, getTrackBackground } from "react-range";
import { ISet } from "../../types/interface";

interface IProp {
    setValue: ISet<number>;
    value: number;
    step: number;
    MIN: number;
    MAX: number;
}

export const RangeSlider: React.FC<IProp> = ({
    MAX,
    MIN,
    step,
    value,
    setValue,
}) => {
    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                flexWrap: "wrap",
                margin: "2em",
            }}
        >
            <Range
                values={[value]}
                step={step}
                min={MIN}
                max={MAX}
                onChange={(values) => {
                    setValue(values[0]);
                }}
                renderTrack={({ props, children }) => (
                    <div
                        onMouseDown={props.onMouseDown}
                        onTouchStart={props.onTouchStart}
                        style={{
                            ...props.style,
                            height: "36px",
                            display: "flex",
                            width: "100%",
                        }}
                    >
                        <div
                            ref={props.ref}
                            style={{
                                height: "5px",
                                width: "100%",
                                borderRadius: "4px",
                                background: getTrackBackground({
                                    values: [value],
                                    colors: ["#548BF4", "#ccc"],
                                    min: MIN,
                                    max: MAX,
                                }),
                                alignSelf: "center",
                            }}
                        >
                            {children}
                        </div>
                    </div>
                )}
                renderThumb={({ props, isDragged }) => (
                    <div
                        {...props}
                        style={{
                            ...props.style,
                            height: "42px",
                            width: "42px",
                            borderRadius: "4px",
                            backgroundColor: "#FFF",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            boxShadow: "0px 2px 6px #AAA",
                        }}
                    >
                        <div
                            style={{
                                height: "16px",
                                width: "5px",
                                backgroundColor: isDragged ? "#548BF4" : "#CCC",
                            }}
                        />
                    </div>
                )}
            />
        </div>
    );
};
