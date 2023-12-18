import { FC } from "React";
import Link from "next/link";
import { Card, CardContent, Typography } from "@mui/material";
import Icon from "@components/Icon";

const TypeCard: FC = ({ type }: string) => {
  return (
    <Link href={type} style={{ textDecoration: "none" }}>
      <Card align="center" data-testid="card">
        <Icon url={type} />
        <CardContent>
          <Typography>{type.toUpperCase()}</Typography>
        </CardContent>
      </Card>
    </Link>
  );
};

export default TypeCard;
