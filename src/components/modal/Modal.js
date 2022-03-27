import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Slide from '@material-ui/core/Slide';
import withStyles from '@material-ui/core/styles/withStyles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { Typography } from '@mui/material';
import clsx from 'clsx';
import React, { forwardRef, memo } from 'react';
import { FaTimes } from 'react-icons/fa';
import { theme } from '../../utils/Theme';

const Transition = forwardRef((props, ref) => {
    return <Slide direction="up" ref={ref} {...props} />;
});


const styles = () => ({
    dialog: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    }
});

const CustomDialog = memo(
    ({
        title,
        open,
        setOpen,
        classes,
        width,
        children,
        height = 'auto',
        backdropclick = false
    }) => {
        const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

        return (
            <Dialog
                open={open}
                fullScreen={fullScreen}
                onClose={() => setOpen(false)}
                TransitionComponent={Transition}
                PaperProps={{
                    elevation: 0,
                    style: { minWidth: width, minHeight: height, margin: 0, backgroundColor: theme.palette.background.main }
                }}
            >
                <DialogTitle
                    disableTypography
                    style={{ background: theme.palette.secondary.main, userSelect: "none" }}
                    className={clsx(classes.dialog)}
                >
                    <Typography variant="h6"
                        fontWeight="medium"
                        color={theme.palette.background.main}
                    >
                        {title}
                    </Typography>
                    <IconButton onClick={() => setOpen(false)}>
                        <FaTimes />
                    </IconButton>
                </DialogTitle>
                <Divider />
                <DialogContent style={{padding: 20}}>{children}</DialogContent>
            </Dialog>
        );
    }
);

export default withStyles(styles)(CustomDialog);