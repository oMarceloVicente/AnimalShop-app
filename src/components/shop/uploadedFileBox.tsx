import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import { useTheme } from "@mui/material";
import { SvgIconProps } from "@mui/material/SvgIcon";
import React from "react";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";

interface Props {
  name: string | undefined;
  size: string | undefined;
  handleIcon: () => void;
  icon: React.ReactElement<SvgIconProps>;
}

const UploadedFileBox = ({ name, size, handleIcon, icon }: Props) => {
  const theme = useTheme();

  return (
    <Stack
      padding={1.25}
      gap={1}
      display={"flex"}
      flexDirection={"row"}
      alignItems={"center"}
      borderRadius={1}
      border={`1px solid rgba(145, 158, 171, 0.16)`}
      maxWidth={"fit-content"}
    >
      <InsertDriveFileIcon fontSize="large" color="warning" />
      <Stack display={"flex"} flexDirection={"column"}>
        <Typography
          sx={{
            whiteSpace: "nowrap",
            textOverflow: "ellipsis",
            overflow: "hidden",
          }}
          variant="body2"
        >
          {name}
        </Typography>
        <Typography variant="caption" color={theme.palette.text.secondary}>
          {size}
        </Typography>
      </Stack>
      <IconButton onClick={handleIcon}>{icon}</IconButton>
    </Stack>
  );
};

export default UploadedFileBox;
