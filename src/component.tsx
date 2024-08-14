import * as React from "react";

export interface State {
    values: number[],
    width: number,
    height: number,
    lables: string[]
    uptrandColor: string,
    downtrandColor: string,
}

export const initialState: State = {
    values: [],
    width: 550,
    height: 300,
    lables: [],
    uptrandColor: '#5cff5c',
    downtrandColor: '#febdbd',
}

const formatCurrency = value => {
    const formatter = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' });
    if (value) return formatter.format(value);
    return 'No data';
}
const formatPercent = value => {
    const formatter = new Intl.NumberFormat('en-US', { style: 'percent', minimumFractionDigits: 0 });
    if (value) return formatter.format(value);
    return 'No data';
}

const icon = (
    <svg fill="currentcolor" height="auto" width="auto" viewBox="0 0 490.2 490.2">
        <g>
            <g>
                <path d="M137.9,245.05c0,46.6,37.8,84.4,84.4,84.4s84.4-37.8,84.4-84.4s-37.8-84.4-84.4-84.4S137.9,198.45,137.9,245.05z
                M229.7,194.55c0,5.1,0,5.1,5.1,5.9c3.9,0.6,7.6,1.8,11.3,3.4c2,0.9,2.7,2.3,2.1,4.4c-0.9,3.1-1.8,6.3-2.8,9.4
                c-0.9,2.9-1.9,3.4-4.7,2c-5.7-2.7-11.6-3.9-17.9-3.5c-1.6,0.1-3.2,0.3-4.8,1c-5.4,2.4-6.3,8.3-1.7,12c2.3,1.9,5,3.2,7.7,4.4
                c4.8,2,9.6,3.9,14.1,6.4c14.5,8,18.4,26.2,8.2,38.6c-3.7,4.5-8.5,7.5-14.1,9c-2.4,0.7-3.5,1.9-3.4,4.5c0.1,2.5,0,5,0,7.5
                c0,2.2-1.1,3.4-3.3,3.5c-2.7,0.1-5.4,0.1-8,0c-2.4,0-3.5-1.4-3.5-3.7c0-1.8,0-3.6,0-5.5c0-4-0.2-4.2-4-4.8
                c-4.9-0.8-9.8-1.9-14.3-4.1c-3.6-1.7-3.9-2.6-2.9-6.3c0.8-2.8,1.5-5.5,2.4-8.3c1-3.2,1.9-3.6,4.8-2.1c5,2.6,10.3,4.1,15.9,4.8
                c3.6,0.4,7.1,0.1,10.4-1.4c6.2-2.7,7.2-9.9,1.9-14.2c-1.8-1.5-3.8-2.6-5.9-3.5c-5.4-2.4-11.1-4.2-16.3-7.3c-8.3-5-13.6-11.8-13-22
                c0.7-11.5,7.2-18.6,17.7-22.4c4.3-1.6,4.4-1.5,4.4-6c0-1.5,0-3.1,0-4.6c0.1-3.4,0.7-4,4.1-4.1c1.1,0,2.1,0,3.2,0
                C229.6,187.25,229.6,187.25,229.7,194.55z M368.4,245.05c0,12.9-10.5,23.4-23.4,23.4s-23.4-10.5-23.4-23.4s10.5-23.4,23.4-23.4
                S368.4,232.15,368.4,245.05z M99.5,221.65c12.9,0,23.4,10.5,23.4,23.4s-10.5,23.4-23.4,23.4s-23.4-10.5-23.4-23.4
                S86.6,221.65,99.5,221.65z M0,344.15v-198.2c0-21.2,17.3-38.5,38.5-38.5H406c21.2,0,38.5,17.3,38.5,38.5v121.5h-32.9v-79.9
                c-3.1,0.8-6.3,1.2-9.6,1.2c-21.5,0-39-17.5-39-39c0-3.3,0.4-6.5,1.2-9.5H78.1c0.4,2.3,0.7,4.7,0.7,7.2c0,21.5-17.5,39-39,39
                c-2.3,0-4.6-0.2-6.8-0.6v118.4c2.2-0.4,4.5-0.6,6.8-0.6c21.5,0,39,17.5,39,39c0,2.5-0.2,4.8-0.7,7.2h228.5v32.9h-268
                C17.3,382.65,0,365.35,0,344.15z M439.6,355.05c2.7,0,4.9,2.2,4.9,4.9v17.8c0,2.7-2.2,4.9-4.9,4.9h-118c-2.7,0-4.9-2.2-4.9-4.9
                v-17.8c0-2.7,2.2-4.9,4.9-4.9H439.6z M462.5,343.95h-118c-2.7,0-4.9-2.2-4.9-4.9v-17.8c0-2.7,2.2-4.9,4.9-4.9h118
                c2.7,0,4.9,2.2,4.9,4.9v17.8C467.4,341.75,465.2,343.95,462.5,343.95z M490.2,282.55v17.8c0,2.7-2.2,4.9-4.9,4.9h-118
                c-2.7,0-4.9-2.2-4.9-4.9v-17.8c0-2.7,2.2-4.9,4.9-4.9h118C488,277.65,490.2,279.85,490.2,282.55z"/>
            </g>
        </g>
    </svg>
);

const trendUp = (
    <svg fill="currentcolor" width="auto" height="auto" viewBox="0 0 256 256">
        <path d="M244.00244,56.00513V120a12,12,0,0,1-24,0V84.9707l-75.51465,75.51465a11.99973,11.99973,0,0,1-16.9707,0L96.00244,128.9707,32.48779,192.48535a12.0001,12.0001,0,0,1-16.9707-16.9707l72-72a11.99973,11.99973,0,0,1,16.9707,0l31.51465,31.51465L203.03174,68h-35.0293a12,12,0,0,1,0-24h63.99512c.39746-.00024.79541.02075,1.1914.06006.167.01636.32911.04785.49366.071.22314.0315.44629.05786.66748.10181.19238.03809.37793.09131.56689.13843.19092.04761.3833.09009.57276.14721.18505.05616.36377.126.54492.19068.18847.06714.37793.12939.56347.2063.16846.06982.33008.1521.49415.22949.19091.08936.3833.17432.57031.27441.15527.0835.30273.17847.4541.26856.18506.10986.37207.21484.55225.33545.16455.11035.31884.2334.478.35156.15479.11523.31348.22314.46387.34692.28467.23365.55664.4812.81787.73951.019.01879.04.03418.05908.05322s.03467.04.05371.05908c.2583.262.50635.53418.73975.81885.12012.146.22461.2998.33691.45019.12159.16309.24805.32251.36133.49195.11865.177.22168.36084.33008.54272.0918.1543.189.30518.27393.46387.09863.18408.18213.37329.2705.56128.07862.16723.16211.33179.2334.50317.07569.18311.13721.37036.20362.55664.06591.18311.13623.36377.19287.551.05713.18823.09912.37964.14648.56982.04736.18946.10059.37622.13916.56909.04346.22071.07031.44361.10156.666.02344.16553.05518.32788.07129.49536Q244.00171,55.40808,244.00244,56.00513Z" />
    </svg>
);

const trendDown = (
    <svg fill="currentcolor" width="auto" height="auto" viewBox="0 0 256 256">
        <path d="M233.71191,211.86438c-.17529.025-.34765.05847-.52539.07581-.394.03881-.78906.05981-1.18408.05981h-64a12,12,0,1,1,0-24h35.0293l-67.0293-67.0293-31.51465,31.51465a11.99973,11.99973,0,0,1-16.9707,0l-72-72a12.0001,12.0001,0,0,1,16.9707-16.9707L96.00244,127.0293l31.51465-31.51465a11.99973,11.99973,0,0,1,16.9707,0l75.51465,75.51465V136a12,12,0,0,1,24,0v63.99487q0,.59657-.06006,1.19141c-.01611.16748-.04785.33-.07129.49536-.03125.22241-.0581.44531-.10156.66614-.03857.19275-.0918.37951-.13916.569-.04736.19031-.08935.38147-.14648.56982-.05664.1875-.12744.36841-.19287.552-.06641.18567-.12793.37256-.20362.55542-.07129.17188-.15478.33655-.23388.50415-.08789.18775-.17139.37659-.27.56043-.085.15881-.18213.30957-.27393.464-.1084.18188-.21143.36572-.33008.54272-.11328.16944-.23974.32874-.36133.492-.1123.15027-.21679.3042-.33691.45019-.2334.28467-.48145.55689-.73975.81873-.019.01916-.03466.04016-.05371.0592s-.04.03443-.05908.05322c-.26123.25831-.5332.50586-.81787.73951-.1499.12317-.30762.23071-.46191.34546-.15967.11865-.315.24243-.48047.35327-.17823.11938-.36328.22314-.54639.332-.15332.09131-.30322.18762-.46094.27221-.18408.09864-.37353.18238-.562.27063-.167.07874-.33105.16224-.50244.23328-.18213.07544-.36816.13648-.55322.20239-.18457.06629-.3667.13721-.55567.19446-.18359.05554-.36963.09619-.55468.1427-.19483.04907-.38721.10352-.58545.14282C234.13721,211.80908,233.92432,211.834,233.71191,211.86438Z" />
    </svg>
);


export class ReactWidget extends React.PureComponent<{}, State> {
    private static updateCallback: (data: object) => void = null;
    public state = initialState;

    constructor(props: any) {
        super(props);
        this.state = initialState;
    }

    public static update(newState: State) {
        if (typeof ReactWidget.update === 'function') {
            ReactWidget.updateCallback(newState);
        }
    }

    public componentWillMount(): void {
        ReactWidget.updateCallback = (newState: State) => {
            this.setState(newState);
        }
    }

    public compopnentWillUnmount(): void {
        ReactWidget.updateCallback = null;
    }

    render() {
        const { values, lables, width, height, uptrandColor, downtrandColor } = this.state;
        const style: React.CSSProperties = { width, height };
        const sumValue = values.reduce((acc, val, i) => {
            if (i === 0 || typeof val !== 'number') return acc;
            return acc + val;
        }, 0);

        console.log(this.state.lables);

        return (
            <div className="widget" style={{ width, height }}>
                <div className="icon">{icon}</div>
                <div className="total__value center">{formatCurrency(sumValue)}</div>
                <div className="total__label center">Today's Total Revenue</div>
                <div className="center">
                    <TrendIcon uptrandColor={uptrandColor} downtrandColor={downtrandColor} value={values[3] / 100} />
                </div>
                <div className="center">
                    <div className="content">
                        <InfoLine label={lables[1]} value={values[1]} delta={values[4] / 100} />
                        <InfoLine label={lables[2]} value={values[2]} delta={values[5] / 100} />
                        <InfoLine label={lables[3]} value={values[3]} delta={values[6] / 100} />
                    </div>
                </div>
            </div>
        )
    }
}

function InfoLine({ label = 'No Data', value = 0, delta = 0 }: { label: string, value: number, delta: number }) {
    return (
        <div className="infoline">
            <div className="infoline__label">{label}</div>
            <div className="infoline__value">{formatCurrency(value)}</div>
            <TrendIcon value={delta} small className="infoline__trand"/>
        </div>
    )
}

interface TrendIconProps {
    value: number
    className?: string
    small?: boolean
    uptrandColor?: string
    downtrandColor?: string
}

function TrendIcon({ value, className = '', small, uptrandColor, downtrandColor }: TrendIconProps) {
    const classes = [className];
    let backgroundColor = '#ccc';
    if (value > 0) {
        classes.push('up');
        backgroundColor = uptrandColor;
    }
    if (value < 0) {
        classes.push('down')
        downtrandColor = downtrandColor;
    };
    if (small) classes.push('small');

    const label = value 
        ? `${formatPercent(Number(value))} vs yesterday`
        : 'No data';

    return (
        <div style={{ backgroundColor }} className={classes.reduce((acc, val) => `${acc} ${val}`, 'trend ')}>
            {value !==0 && (
                <div className="trend__icon" >
                    {value > 0 ? trendUp : trendDown}
                </div>
            )}  
            <div className="trend__label">{label}</div>
        </div>
    )
}

