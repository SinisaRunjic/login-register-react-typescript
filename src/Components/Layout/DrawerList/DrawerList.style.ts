import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
  }),
);

export default useStyles