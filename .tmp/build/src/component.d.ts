import * as React from "react";
export interface State {
    values: number[];
    width: number;
    height: number;
    lables: string[];
    uptrandColor: string;
    downtrandColor: string;
}
export declare const initialState: State;
export declare class ReactWidget extends React.PureComponent<{}, State> {
    private static updateCallback;
    state: State;
    constructor(props: any);
    static update(newState: State): void;
    componentWillMount(): void;
    compopnentWillUnmount(): void;
    render(): React.JSX.Element;
}
