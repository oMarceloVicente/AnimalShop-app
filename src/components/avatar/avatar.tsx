import Avatar, { AvatarOwnProps } from "@mui/material/Avatar";
import { useState } from "react";

export default function UserAvatar(props: AvatarOwnProps) {
  const [image, setImage] = useState(props.src);
  const alt = props.alt || "Animal";

  return (
    <Avatar {...props}>
      {image ? (
        <img
          onError={() => setImage(undefined)}
          src={props.src}
          alt={props.alt}
          style={{ width: "100%", height: "100%", borderRadius: "50%" }}
        />
      ) : (
        alt.charAt(0).toUpperCase()
      )}
    </Avatar>
  );
}
