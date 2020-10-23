# Login Screen

A standardized login screen.

## Design Notes

See examples for details on how to override styles/colors

## Technical Notes

SRTS2 example usage (also in examples):

```
    <LoginScreen
      paperColor="var(--color-srts-green)"
      backgroundColor="var(--color-srts-lightgreen)"
      title="SRTS 2.0"
    >
      <Tooltip title="Sign in to SRTS">
        <Button className={classes.loginButton}>Sign In</Button>
      </Tooltip>
    </LoginScreen>
```
