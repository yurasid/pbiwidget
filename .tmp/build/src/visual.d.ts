import powerbi from "powerbi-visuals-api";
import VisualConstructorOptions = powerbi.extensibility.visual.VisualConstructorOptions;
import VisualUpdateOptions = powerbi.extensibility.visual.VisualUpdateOptions;
import IVisual = powerbi.extensibility.visual.IVisual;
import "./../style/visual.less";
export declare class Visual implements IVisual {
    private root;
    private viewport;
    private el;
    private formattingSettings;
    private formattingSettingsService;
    constructor(options: VisualConstructorOptions);
    clear(): void;
    getFormattingModel(): powerbi.visuals.FormattingModel;
    update(options: VisualUpdateOptions): void;
}
