import { createTheme, responsiveFontSizes, ThemeProvider } from '@mui/material/styles';

let theme = createTheme({
    typography: {
        "fontFamily": `"Poppins" , sans-serif`,
        "fontSize": 12,
        "fontWeightLight": 300,
        "fontWeightRegular": 400,
        "fontWeightMedium": 500
    }
});
theme = responsiveFontSizes(theme);

const Layout = ({ children }) => {
    return (
        <ThemeProvider theme={theme}>
            <div className="content">
                <div className="page-container">
                    {children}
                </div>
            </div>
        </ThemeProvider>
    );
}

export default Layout;