import App, { Container } from 'next/app';
import Page from '../components/Page';
import MyProvider from '../components/MyProvider';

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    // this exposes the query to the user
    pageProps.query = ctx.query;
    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <MyProvider>
          <Page>
            <Component {...pageProps} />
          </Page>
        </MyProvider>
      </Container>
    );
  }
}

export default MyApp;
