function JoinButton()
{
    const styles = {
        joinDiv: {
            paddingLeft: "50%"
        },
        joinText: {
            color: "#FFCD10",
            fontSize: "22px",
            textDecoration: "none"
        }
    }
    
    return(
        <div style={styles.joinDiv}>
            <a className="btn" style={styles.joinText} href="/join-us"><b>Join us</b></a>
        </div>
    )
}

export default JoinButton

