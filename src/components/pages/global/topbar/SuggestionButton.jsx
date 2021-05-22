import { makeStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

import SuggestionIcon from '../../../../assets/UI_component_svg/SuggestionIcon';

const useStyles = makeStyles((theme) => ({
  suggestionButton: {
    color: '#6389bf',
    backgroundColor: '#e8eef6',
    outline: 'none',
  },
  suggestionBackDrop: {
    background: 'rgba(0,0,0,0.2)'
  },
  suggestion: {
    borderRadius: '2vh',
    height: '70vh',
    width: '70vh',
    textAlign: 'center'
  },
  uploadField: {
    borderRadius: '2vh',
    height: '40%',
    width: '50%',
    backgroundColor: 'white',
    borderStyle: 'dashed',
    borderWidth: '2px',
    borderColor: '#c7cdd4',
    marginBottom: '3vh',
    boxShadow: 'none'
  },
  suggestionText: {
    height: '50%',
  },
  cancelButton: {
    height: '7vh',
    backgroundColor: "#FFFFFF",
    padding: '12px 24px',
    margin: theme.spacing(1),
    borderRadius: '5em',
    fontSize: '16px',
    color: '#486EAB',
    textTransform: 'none',
    borderStyle: 'solid',
    borderWidth: '1px',
    borderColor: '#486EAB',
  },
  saveButton: {
    height: '7vh',
    backgroundColor: "#486EAB",
    padding: '12px 24px',
    margin: theme.spacing(1),
    borderRadius: '5em',
    fontSize: '16px',
    color: '#FFFFFF',
    textTransform: 'none',
    borderStyle: 'solid',
    borderWidth: '1px',
  },
}))

const SuggestionButton = (props) => {
  const classes = useStyles();
  return (
    <div>
      <Button
        onClick={() => props.setModalOpen(true)}
        startIcon={<SuggestionIcon fontSize="large"/>}
        className={classes.suggestionButton}
      >
        <Typography>
         Suggestions
        </Typography>
      </Button>

      <Dialog
        PaperProps={{
          classes: {
            root: classes.suggestion
          }
        }}
        BackdropProps={{
          classes: {
            root: classes.suggestionBackDrop
          }
        }}
        open={props.modalOpen}
        onClose={() => props.setModalOpen(false)}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Submit Suggestion</DialogTitle>
        <DialogContent>
          <Button
            variant="contained"
            component="label"
            className={classes.uploadField}
          >
            Upload Screenshot
            <input type="file" onChange={props.handleChange} hidden/>
          </Button>
          <TextField
            className={classes.suggestionText}
            label="Write Suggestion here.."
            rows="5"
            type="search"
            variant="outlined"
            fullWidth
            multiline
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => props.setModalOpen(false)} className={classes.cancelButton}>
            Cancel
          </Button>
          <Button onClick={() => props.setModalOpen(false)} className={classes.saveButton}>
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default SuggestionButton;