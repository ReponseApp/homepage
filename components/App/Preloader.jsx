import React from 'react'

export default function Preloader(props) {

    const did_you_know = [
        "Socket'ler Hala Bağlanamadı.",
        "Cu'da Bomba Patlamış!",
        "Reponse Retro Fikri Aklımıza Villamızda Havuz Başında Kokteyl İçerken Geldi.",
        "ReXulEc, sunucudan 31 kez Noir tarafından banlandı.",
        "Yukarı Yukarı Aşağı Aşağı Sağa Sola Enter. Tadaaa!",
        "Uygulamamız Flutter ile yapılacaktı ama Noir'i zor ikna ettik :flushed:.",
        "Burda yazan bilgiyi bilmiyorsunuz!",
        "Okula cu gözlüğü ile gelmek sizi havalı yapmaz.",
    ];

    return (props.loading ?
        <div id="preload" className="bg-dark-200 h-screen w-screen select-none fixed">
            <center className="pt-60 text-white">
                <img src={'../assets/images/preloadicon.png'} className="w-24 h-24 animate-spin" alt="" />
                <p className="mt-5 text-gray-400">Biliyor muydunuz?</p>
                <p className="text-lg mt-3 max-w-1/3">{ did_you_know[Math.floor(Math.random() * did_you_know.length)] }</p>
            </center>
        </div>
        :
        ""
    )
    
}