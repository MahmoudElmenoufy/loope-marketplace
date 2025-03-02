import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";

export default function FeaturedSellers({
  imageSrc,
  imageAlt,
}: {
  imageSrc: string;
  imageAlt: string;
}) {
  return (
    <Stack direction="row" spacing={2}>
      <Avatar alt={imageAlt} src={imageSrc} className="!w-40 !h-40 " />
    </Stack>
  );
}
