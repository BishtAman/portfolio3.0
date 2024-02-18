import { Fragment } from "react";
import { BaseImages } from "../../components/base-images/base-images.component";
import { BaseData } from "../../components/base-data/base.data.component";

export const Base = () => {
  return (
    <Fragment>
      <BaseImages />
      <BaseData />
    </Fragment>
  );
};
