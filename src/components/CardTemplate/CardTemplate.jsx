import React, { useContext } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Heading,
  Image,
  Paragraph,
  ResponsiveContext,
} from "grommet"

const CardTemplate = ({ title, content, footer, imgurl }) => {
  const size = useContext(ResponsiveContext);
  return (
    <Card>
      <CardHeader pad="medium">
        <Heading level={2} margin="none">
          {title}
        </Heading>
      </CardHeader>
      <CardBody pad="small">
        <Paragraph maxLines={size === "small" ? 3 : undefined}>
          <Image
            fill="horizontal"
            fit="cover"
            src={imgurl}
          />
        </Paragraph>
      </CardBody>
      <CardFooter pad="medium" background="background-contrast">
        {footer}
      </CardFooter>
    </Card>
  );
};


export default CardTemplate;
