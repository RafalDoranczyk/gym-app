import React, { useState } from "react";
import { MenuItem, IconButton, Menu } from "@material-ui/core";
import { MoreVert } from "@material-ui/icons";

export interface SettingsMenuProps {
  onEditClick: () => void;
  onDeleteClick: () => void;
}

const SimpleSettingsMenu: React.FunctionComponent<SettingsMenuProps> = ({
  onEditClick,
  onDeleteClick,
}) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const setMenuOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <IconButton
        aria-controls="settings"
        aria-haspopup="true"
        onClick={setMenuOpen}
        aria-label="settings"
      >
        <MoreVert />
      </IconButton>
      <Menu
        id="settings"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem
          onClick={() => {
            onEditClick();
            handleClose();
          }}
        >
          Edit
        </MenuItem>
        <MenuItem
          onClick={() => {
            onDeleteClick();
            handleClose();
          }}
        >
          Delete
        </MenuItem>
      </Menu>
    </>
  );
};

export default SimpleSettingsMenu;
