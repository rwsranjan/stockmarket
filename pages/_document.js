import { Html, Head, Main, NextScript } from 'next/document'
const path = process.env.NEXTAUTH_URL
const boxiconsurl = path + '/assets/boxicons/css/boxicons.min.css';
const dafontfreesurl = path + '/assets/css/dafontfree.css';

export default function Document() {
  return (
    <Html lang="en">
      <Head>

        <link href="https://fonts.googleapis.com/css?family=Arimo:400,400i,700,700i&amp;display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"
          integrity="sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A=="
          crossOrigin="anonymous" referrerPolicy="no-referrer" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossOrigin="anonymous" />

        <link href="/assets/css/font-awesome-all.css" rel="stylesheet" type="text/css" />
        <link href="/assets/css/flaticon.css" rel="stylesheet" type="text/css" />
        <link href="/assets/css/owl.css" rel="stylesheet" type="text/css" />
        <link href="/assets/css/bootstrap.css" rel="stylesheet" type="text/css" />
        <link href="/assets/css/jquery.fancybox.min.css" rel="stylesheet" type="text/css" />
        <link href="/assets/css/animate.css" rel="stylesheet" type="text/css" />
        <link href="/assets/css/color.css" rel="stylesheet" type="text/css" />
        <link href="/assets/css/rtl.css" rel="stylesheet" type="text/css" />
        <link href="/assets/css/custom.css" rel="stylesheet" type="text/css" />
        <link href="/assets/css/responsive.css" rel="stylesheet" type="text/css" />
        <link rel="stylesheet" href="/assets/css/style.css" type="text/css" />

        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossOrigin="anonymous"></script>

        <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js" integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p" crossOrigin="anonymous"></script>

        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js" integrity="sha384-cVKIPhGWiC2Al4u+LWgxfKTRIcfu0JTxR+EQDz/bgldoEyl4H0zUF0QKbrJ0EcQF" crossOrigin="anonymous"></script>

        <script src="/assets/js/jquery.js"></script>
        <script src="/assets/js/popper.min.js"></script>
        <script src="/assets/js/bootstrap.min.js"></script>
        <script src="/assets/js/owl.js"></script>
        <script src="/assets/js/wow.js"></script>
        <script src="/assets/js/validation.js"></script>
        <script src="/assets/js/jquery.fancybox.js"></script>
        <script src="/assets/js/appear.js"></script>
        <script src="/assets/js/jquery.countTo.js"></script>
        <script src="/assets/js/scrollbar.js"></script>
        <script src="/assets/js/nav-tool.js"></script>
        <script src="/assets/js/TweenMax.min.js"></script>
        <script src="/assets/js/circle-progress.js"></script>
        <script src="/assets/js/jquery.nice-select.min.js"></script>
        <script src="/assets/js/script.js"></script>
      </Head>
      <body style={{ overflowX: 'hidden' }}>
      
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
