import React, { useEffect, useState } from "react";
import Masonry from "react-masonry-css";
import { Illustration } from "../../models";
import IllustrationItem from "./illustrationItem";
import Select from "react-select";
import { useLocation } from "react-router-dom";
import queryString from "query-string";

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

  enum filterState {
    all = "All content",
    illustrations = "Illustrations",
    collections = "Collections",
    projects = "Projects",
    personal_work = "Personal Work",
  }
  const location = useLocation();
  const [filterStatus, setFilteredStatus] = useState(() => {
    const params = queryString.parse(location.search);
    return (params.filterState as filterState) || filterState.all;
  });

  const [illustrationsDisplayed, setIllustrationsDisplayed] =
    useState(illustrations);

  function filter(illustrations: Illustration[], label: string) {
    const result = illustrations.filter((illustration) => {
      return (
        label == filterState.all ||
        (label == filterState.projects &&
          illustration.categories.includes(
            filterState.projects.toLowerCase()
          )) ||
        (label == filterState.illustrations &&
          illustration.categories.includes(
            filterState.illustrations.toLowerCase()
          )) ||
        (label == filterState.collections &&
          illustration.categories.includes(
            filterState.collections.toLowerCase()
          ))
      );
    });
    return result;
  }

  useEffect(() => {
    const new_url = new URL(window.location.href);
    if ((filterStatus as filterState) == filterState.all) {
      new_url.searchParams.delete("filterState");
    } else {
      new_url.searchParams.set("filterState", filterStatus as filterState);
    }
    window.history.pushState({ path: new_url.href }, "", new_url.href);
    setIllustrationsDisplayed(
      filter(illustrations, (filterStatus as filterState) || filterState.all)
    );
  }, [filterStatus]);

  useEffect(() => {
    setIllustrationsDisplayed(filter(illustrations, filterStatus));
  }, [filterStatus, illustrations]);

  const onFilterChange = (option: any) => {
    setFilteredStatus(option.value);
  };

  const options = [
    { value: filterState.all, label: filterState.all },
    { value: filterState.collections, label: filterState.collections },
    { value: filterState.illustrations, label: filterState.illustrations },
    { value: filterState.projects, label: filterState.projects },
  ];

  window.addEventListener("popstate", (event) => {
    if (event.state.path) {
      const old_filterState =
        (queryString.parseUrl(event.state.path).query
          .filterState as filterState) || filterState.all;
      setFilteredStatus(old_filterState);
    }
  });

  return (
    <>
      {!selectedCollection && (
        <div className="relative max-w-[1420px] m-auto lg:mx-auto">
          <div className="mb-4 md:mb-4 mx-auto md:mx-0 w-4/5 md:w-1/5 z-10 md:right-0 md:top-[-50px] block md:absolute text-center md:mr-6">
            <Select
              inputId="filter-input"
              onChange={onFilterChange}
              defaultValue={options[0]}
              options={options}
              value={{ label: filterStatus, value: filterStatus }}
              theme={(theme) => ({
                ...theme,
                borderRadius: 10,
                colors: {
                  ...theme.colors,
                  primary25: "hotpink",
                  primary: "darkkhaki",
                  neutral0: "#FBF6FF",
                  neutral20: "darkkhaki",
                },
              })}
            ></Select>
          </div>
        </div>
      )}
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="flex gap-4 max-w-[1420px] justify-center m-auto 2sm:mx-8 lg:mx-auto"
        columnClassName="masonry-grid_column"
      >
        {illustrationsDisplayed.map((illustration) => (
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
