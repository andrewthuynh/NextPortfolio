import Button from '@material-ui/core/Button';

const Socials = () => {
    return (
        <div align='center' style={{
            backgroundColor: '#fff176',
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <Button target="_blank" href="https://www.facebook.com/andrew.huynh.374">
                Facebook
            </Button>
            <Button target="_blank" href="https://www.instagram.com/andrewhuynhs/">
                Instagram
            </Button>
            <Button target="_blank" href="https://github.com/andrewthuynh">
                Github
            </Button>
            <Button target="_blank" href="https://www.linkedin.com/in/andrewtaylorhuynh/">
                LinkedIn
            </Button>
            <Button target="_blank" href="mailto:andrewtaylorhuynh@gmail.com">
                Email
            </Button>
        </div>
    );
}

export default Socials;