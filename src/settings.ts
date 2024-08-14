"use strict";

import { formattingSettings } from "powerbi-visuals-utils-formattingmodel";

import FormattingSettingsCard = formattingSettings.SimpleCard;
import FormattingSettingsSlice = formattingSettings.Slice;
import FormattingSettingsModel = formattingSettings.Model;

/**
* Circle Formatting Card
*/
class WidgetSettings extends FormattingSettingsCard {
    uptrandColor = new formattingSettings.ColorPicker({
        name: "uptrandColor", // circle color name should match circle color property name in capabilities.json
        displayName: "Color",
        description: "The fill color of the uptand.",
        value: { value: "#5cff5c" }
    });
    downtrandColor = new formattingSettings.ColorPicker({
        name: "uptrandColor", // circle color name should match circle color property name in capabilities.json
        displayName: "Color",
        description: "The fill color of the uptand.",
        value: { value: "#febdbd" }
    });

    name: string = "widget"; // circle card name should match circle object name in capabilities.json
    displayName: string = "Widget";
    show: boolean = true;
    slices: Array<FormattingSettingsSlice> = [this.uptrandColor, this.downtrandColor];
}

/**
* visual settings model class
*
*/
export class VisualFormattingSettingsModel extends FormattingSettingsModel {
    // Create formatting settings model circle formatting card
    widget = new WidgetSettings();

    cards = [this.widget];
}
