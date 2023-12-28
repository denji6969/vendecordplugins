import { React } from "@vendetta/metro/common";
import { Forms } from "@vendetta/ui/components";
import {
  ActionSheet,
  ActionSheetCloseButton,
  ActionSheetContentContainer,
  ActionSheetTitleHeader,
  hideActionSheet,
} from "../stuff/types";

const { FormRadioRow } = Forms;

export default function ChooseSheet<T extends string[]>({
  label,
  value: _value,
  choices,
  update,
}: {
  label: string;
  value: T[number];
  choices: T;
  update: (val: T[number]) => void;
}) {
  const [value, setValue] = React.useState(_value);
  update(value);

  return (
    <ActionSheet>
      <ActionSheetContentContainer>
        <ActionSheetTitleHeader
          title={label}
          trailing={
            <ActionSheetCloseButton onPress={() => hideActionSheet()} />
          }
        />
        {choices.map((x) => (
          <FormRadioRow
            label={x}
            onPress={() => setValue(x)}
            selected={value === x}
          />
        ))}
      </ActionSheetContentContainer>
    </ActionSheet>
  );
}
