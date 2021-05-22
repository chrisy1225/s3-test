import { makeStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
   editBtn: {
      backgroundColor: "#FFFFFF",
      padding: '12px 24px',
      margin: theme.spacing(1),
      borderRadius: '10em',
      fontSize: '16px',
      color: '#486EAB',
      textTransform: 'none',
      border: '1px #486EAB solid',
   },
   editBackDrop: {
      background: 'rgba(0,0,0,0.2)'
   },
   edit: {
      borderRadius: '2vh',
      height: '70vh',
      width: '70vh',
      textAlign: 'center'
   },
   uploadField: {
      borderRadius: '2vh',
      padding: '5vh',
      height: '80%',
      width: '100%',
      backgroundColor: 'white',
      borderStyle: 'dashed',
      borderWidth: '2px',
      borderColor: '#c7cdd4',
      boxShadow: 'none'
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
}));

const EditBlueprintButton = (props) => {
   const classes = useStyles();
   return (
      <div>
         <Button
            onClick={() => props.setModalOpen(true)}
            className={classes.editBtn}
         >
            Edit Blueprint
         </Button>

         <Dialog
            PaperProps={{
               classes: {
                  root: classes.edit
               }
            }}
            BackdropProps={{
               classes: {
                  root: classes.editBackDrop
               }
            }}
            open={props.modalOpen}
            onClose={() => props.setModalOpen(false)}
            aria-labelledby="edit-blueprint-title"
         >
            <DialogTitle id="edit-blueprint-title">Edit Blueprint</DialogTitle>
            <DialogContent>
               <Button
                  variant="contained"
                  component="label"
                  className={classes.uploadField}
               >
                  <div>
                     <Typography>
                        Upload Blueprint Image
                     </Typography>
                     <Typography variant="body2">
                        500 x 700 px
                     </Typography>
                  </div>
                  <input type="file" onChange={props.handleImage} hidden />
               </Button>
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

export default EditBlueprintButton;