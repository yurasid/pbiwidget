import { formattingSettings } from "powerbi-visuals-utils-formattingmodel";
import FormattingSettingsCard = formattingSettings.SimpleCard;
import FormattingSettingsSlice = formattingSettings.Slice;
import FormattingSettingsModel = formattingSettings.Model;
/**
* Circle Formatting Card
*/
declare class WidgetSettings extends FormattingSettingsCard {
    uptrandColor: formattingSettings.ColorPicker;
    downtrandColor: formattingSettings.ColorPicker;
    name: string;
    displayName: string;
    show: boolean;
    slices: Array<FormattingSettingsSlice>;
}
/**
* visual settings model class
*
*/
export declare class VisualFormattingSettingsModel extends FormattingSettingsModel {
    widget: WidgetSettings;
    cards: WidgetSettings[];
}
export {};
