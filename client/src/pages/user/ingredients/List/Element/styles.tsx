import { createStyles, makeStyles, Theme } from "@material-ui/core";
import styled from "styled-components";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    wrapper: {
      position: "relative",
      overflow: "hidden",
      opacity: 0.8,
      "&:hover, &:hover *": {
        opacity: 1,
      },

      "&:hover $topDivider": {
        transform: "translateX(-10px)",
      },
      "&:hover $bottomDivider": {
        transform: "translateX(20px)",
      },
      "&:hover $priceIcon": {
        transform: "rotate(0)",
      },
    },
    cardTitle: {
      textTransform: "uppercase",
      fontWeight: "bold",
      fontSize: "14px",
    },
    subheaderSpan: {
      fontSize: "12px",
      display: "inline",
      textTransform: "capitalize",
    },
    avatarWrapper: {
      position: "relative",
    },
    avatarAfter: {
      position: "absolute",
      top: "65%",
      left: "50%",
      height: "13px",
      width: "100%",
      transform: "translate(-50%, 0)",
      fontSize: "10.5px",
      textAlign: "center",
      transition: ".1s linear opacity",
      color: theme.palette.text.secondary,
      opacity: 0,
    },
    avatar: {
      paddingBottom: "5px",
      fontSize: "15px",
      width: "50px",
      textAlign: "center",
      backgroundColor: "inherit",
      color: theme.palette.text.primary,
    },
    cardContent: {
      paddingRight: 0,
    },
    chartWrapper: {
      flexBasis: "90%",
    },
    chartBarWrapper: {
      display: "flex",
      flexFlow: "row wrap",
      alignItems: "center",
      margin: "6px 0",
    },
    chartBarName: {
      margin: "3px 0px",
      flexBasis: "100%",
      fontSize: "13px",
    },
    chartBarValue: {
      marginLeft: "16px",
      flexBasis: "10%",
      fontSize: "14px",
      fontWeight: "bold",
      opacity: 0.7,
    },
    cardActions: {
      height: "50px",
    },
    priceWrapper: {
      margin: "0 0 0 auto",
      height: "100%",
      width: "20%",
      display: "flex",
      alignItems: "center",
      fontSize: "16px",
    },
    price: {
      fontSize: "14px",
      fontStyle: "italic",
    },
    priceIcon: {
      fontSize: "16px",
      transform: "rotate(30deg)",
      transition: ".1s linear transform",
    },
    topDivider: {
      marginLeft: "0",
      marginRight: "120px",
      backgroundColor: theme.palette.getContrastText(
        theme.palette.background.default
      ),
      transform: "translateX(0px)",
      transition: ".2s linear all",
      opacity: 0.5,
    },
    bottomDivider: {
      marginLeft: "180px",
      backgroundColor: theme.palette.getContrastText(
        theme.palette.background.default
      ),
      transition: ".2s linear all",
      opacity: 0.5,
    },
  })
);

interface StyledBarProps {
  readonly color: string;
  readonly percentValue: string;
}

export const StyledBar = styled.span<StyledBarProps>`
  flex-basis: ${(props) => props.percentValue};
  max-width: 80%;
  margin-left: 3px;
  height: 15px;
  background-color: ${(props) => props.color};
  opacity: 0.6;
  transition: 0.5s linear all;
  border-radius: 10px 5px;
`;
