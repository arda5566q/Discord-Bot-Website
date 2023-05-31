import ErrorPage from '../components/ErrorPage';
const UnkownPage = () => {
    let messages = [
        'Yolunu mu kaybettin, evlat?',
        'Lanet olsun! Burası çıkmaz yol.',
        'Sihirbazlar bu yolu kapattı, Harry!'
    ];

    return <ErrorPage code={404} message={messages[Math.floor(Math.random()*messages.length)] || "Sayfa bulunamadı."} />
}

export default UnkownPage;

