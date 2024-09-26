import React, { useState } from "react";
import Masonry from "react-masonry-css";
import { Illustration } from "../../models";
import IllustrationItem from "./illustrationItem";
import { MenuItem, Select } from "@mui/material";

interface Props {
  illustrations: Illustration[];
  selectedCollection: string;
  setSelectedCollection: React.Dispatch<React.SetStateAction<string>>;
}

const IllustrationGrid: React.FC<Props> = ({
  illustrations,
  selectedCollection,
  setSelectedCollection,
}) => {
  const breakpointColumnsObj = {
    default: 3,
    1100: 2,
    768: 1,
  };

  const handleChange = () => {};

  return (
    <>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="flex gap-4 max-w-[1420px] justify-center m-auto 2sm:mx-8 lg:mx-auto"
        columnClassName="masonry-grid_column"
      >
        {illustrations.map((illustration) => (
          <IllustrationItem
            key={illustration.name}
            {...illustration}
            selectedCollection={selectedCollection}
            setSelectedCollection={setSelectedCollection}
          />
        ))}
      </Masonry>
    </>
  );
};

export default IllustrationGrid;
