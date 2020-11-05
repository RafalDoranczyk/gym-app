import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import Pagination from "@material-ui/lab/Pagination";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      "& > *": {
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(2),
      },
    },
  })
);

export interface PaginatorProps {
  count: number;
}

const Paginator: React.FunctionComponent<PaginatorProps> = ({ count }) => {
  const [page, setPage] = useState(1);
  const history = useHistory();
  const classes = useStyles();
  const params = new URLSearchParams(history.location.search);

  useEffect(() => {
    const p = params.get("page") || 1;
    setPage(+p);
  }, [params]);

  const handleChange = (e: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);

    params.set("page", value.toString());
    const newSearch = params.toString();

    history.replace({
      search: `?${newSearch}`,
    });
  };

  return count ? (
    <div className={classes.root}>
      <Pagination
        page={page}
        size="small"
        count={count}
        color="primary"
        onChange={handleChange}
      />
    </div>
  ) : null;
};

export default Paginator;
