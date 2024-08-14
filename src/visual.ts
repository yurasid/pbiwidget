"use strict";
import powerbi from "powerbi-visuals-api";

import DataView = powerbi.DataView;
import VisualConstructorOptions = powerbi.extensibility.visual.VisualConstructorOptions;
import VisualUpdateOptions = powerbi.extensibility.visual.VisualUpdateOptions;
import IViewport = powerbi.IViewport;
import IVisual = powerbi.extensibility.visual.IVisual;


import { FormattingSettingsService } from "powerbi-visuals-utils-formattingmodel";
import { VisualFormattingSettingsModel } from "./settings";

// Import React dependencies and the added component
import * as React from "react";
import * as ReactDOM from "react-dom";
import { createRoot, Root } from "react-dom/client";
import { ReactWidget, initialState } from "./component";

import "./../style/visual.less";

export class Visual implements IVisual {
    private root: Root;
    private viewport: IViewport;
    private el: React.ComponentElement<any, any>;
    private formattingSettings: VisualFormattingSettingsModel;
    private formattingSettingsService: FormattingSettingsService

    constructor(options: VisualConstructorOptions) {
        this.root = createRoot(options.element); 
        this.el = React.createElement(ReactWidget, {});
        this.formattingSettingsService = new FormattingSettingsService();

        this.root.render(this.el);
    }

    public clear() {
        ReactWidget.update(initialState);
    }

    getFormattingModel(): powerbi.visuals.FormattingModel {
        // console.log(this.formattingSettings);
        return this.formattingSettingsService.buildFormattingModel(this.formattingSettings);    
    }

    public update(options: VisualUpdateOptions) {
        const dataView: DataView = options?.dataViews[0];

        console.log('options', options)

        this.viewport = options.viewport;
        const { width, height } = this.viewport;

        if (dataView) {
            const numValuesArray: number[]  = dataView?.table?.rows[0] as number[];
            const lables: string[] = dataView?.table?.columns.map((column) => column.displayName.replace(/Sum of /, ''));

            this.formattingSettings = this.formattingSettingsService.populateFormattingSettingsModel(VisualFormattingSettingsModel, dataView);
            const widgetSettings = this.formattingSettings.widget;

            ReactWidget.update({
                values: numValuesArray,
                lables: lables,
                width: width,
                height: height,
                uptrandColor: widgetSettings.uptrandColor.value.value,
                downtrandColor: widgetSettings.downtrandColor.value.value
            });
        } else {
            this.clear();
        } 
    }
}