//
import Card from "./Card";
import Dialog from "./Dialog";
import Button from "./Button";
import Switch from "./Switch";
import SvgIcon from "./SvgIcon";
import Tooltip from "./Tooltip";
import DataGrid from "./DataGrid";
import Typography from "./Typography";
import ButtonGroup from "./ButtonGroup";
import CssBaseline from "./CssBaseline";
import ToggleButton from "./ToggleButton";

// ----------------------------------------------------------------------

export default function ComponentsOverrides(theme) {
  return Object.assign(
    Card(theme),
    Dialog(theme),
    Button(theme),
    Switch(theme),
    SvgIcon(theme),
    Tooltip(theme),
    DataGrid(theme),
    Typography(theme),
    ButtonGroup(theme),
    CssBaseline(theme),
    ToggleButton(theme)
  );
}
