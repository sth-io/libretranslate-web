import { Divider, Link, Paper, Stack } from "@mui/material";

export const Footer = () => {
  return (
    <footer>
      <Paper elevation={0} sx={{padding: '5px 25px'}}>
        <Stack direction="row" gap={1}>
          <p>{`made with ❤`}</p>
          <Divider orientation="vertical" flexItem />
          <p>
            {`frontend by: `}
            <Link
              href="https://github.com/sth-io"
              target="_blank"
              rel="noopener noreferrer"
            >
              kWeglinski
            </Link>
          </p>
          <Divider orientation="vertical" flexItem />
          <p>
            {`API by: `}
            <Link
              href="https://github.com/LibreTranslate/LibreTranslate/graphs/contributors"
              rel="noopener noreferrer"
              target="_blank"
            >
              LibreTranslate Contributors
            </Link>{" "}
          </p>
          <Divider orientation="vertical" flexItem />
          <p>
            {`powered by: `}
            <Link
              href="https://github.com/argosopentech/argos-translate/"
              rel="noopener noreferrer"
              target="_blank"
            >
              Argos Translate
            </Link>
          </p>
        </Stack>
      </Paper>
    </footer>
  );
};
