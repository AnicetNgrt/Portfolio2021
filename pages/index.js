import {useState, createContext} from "react"
import Image from 'next/image'

export default function Main({props}) {
    const [page, setPage] = useState("experience");

    return  <>
    <div className="bg-image">
        <Image src="/background1.jpg" width="4000" height="3000"/>
    </div>
    <PageContainer>
        <PageContent>
            <SiteTitle/>
            <Separator/>
            <PageTop page={page} setPage={setPage}/>
            <Separator/>
            {page === "about" && <AboutPage/>}
        </PageContent>
        <VerticalCodeLine/>
    </PageContainer>
    </>
}

function PageTop({page, setPage}) {
    return <div className="page-top">
        <div className="page-top-profile-picture-container">
            <Image className="page-top-profile-picture" src="/profile.jpg" layout="intrinsic" width="2665" height="3697"/>
        </div>
        <PageNav page={page} setPage={setPage}/>
    </div>
}

function PageNav({page, setPage}) {
    return <div className="page-nav">
        <h2 className="page-nav-title">{"nav?() = \"↓\""}</h2>
        <div className="page-nav-buttons-container">
            <PageNavButton current={page} setPage={setPage} pageName="about">About</PageNavButton>
            <PageNavButton current={page} setPage={setPage} pageName="contact">Contact</PageNavButton>
            <PageNavButton current={page} setPage={setPage} pageName="project">Projects</PageNavButton>
            <PageNavButton current={page} setPage={setPage} pageName="experience">Experience</PageNavButton>
            <PageNavButton current={page} setPage={setPage} pageName="education">Education</PageNavButton>
            <PageNavButton current={page} setPage={setPage} pageName="hobbies">Hobbies</PageNavButton>
            <PageNavButton current={page} setPage={setPage} pageName="skills">Skills</PageNavButton>
            <PageNavButton current={page} setPage={setPage} pageName="other">More???</PageNavButton>
        </div>
    </div>
}

function PageNavButton({children, pageName, current, setPage}) {
    return <div className={`page-nav-button ${current === pageName ? "selected" : ""}`} onClick={()=>setPage(pageName)}>
        <h2>
            <span className="page-nav-button-arrow">{'→'}</span>{children}
        </h2>
    </div>
}

function PageContent({children}) {
    return <div className="page-content">
        {children}
    </div>
}

function PageContainer({children}) {
    return <div className="page-container">
        {children}
    </div>
}

function SiteTitle({props}) {
   return <div className="site-title">
       <div className="site-title-name-container">
        <h1 className="site-title-title">Anicet</h1>
        <h2 className="site-title-subtitle">🧙‍♂️Nougaret</h2>
       </div>
       <div className="site-title-stamp">
           <p className="site-title-stamp-line">PORT</p>
           <p className="site-title-stamp-line">FOLIO</p>
           <p className="site-title-stamp-line">2021</p>
       </div>
   </div>
}

function Separator({props}) {
    return <div className="dashed-separator"></div>
}

function AboutPage({props}) {
    return <div className="page">
        <h2>About</h2>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vel arcu facilisis, varius justo eu, finibus diam. Donec volutpat, tortor at euismod luctus, elit ipsum ultricies leo, et venenatis sapien urna eu lacus. Fusce lacinia laoreet elementum. Curabitur ullamcorper nisi quis feugiat imperdiet. Sed diam odio, fermentum dapibus efficitur eu, semper a ipsum. Duis mattis feugiat tortor a tempor. Donec vel mauris sit amet erat pretium ultrices non et sapien. Pellentesque eleifend lectus in metus condimentum, eget lobortis sem feugiat. Vivamus tincidunt ante a lacus aliquam vulputate. Donec eget nulla tincidunt, cursus libero ac, porttitor purus. Maecenas tincidunt diam leo, nec venenatis orci pulvinar vestibulum. Proin arcu dui, tincidunt aliquam elementum id, tristique quis dui. Maecenas porta vitae mi at euismod. Curabitur fringilla nunc sed libero porttitor tincidunt. Quisque eget tellus vel risus cursus sagittis.

Integer sit amet tincidunt dolor, vitae ultricies lectus. Aenean in maximus massa. Aliquam vel tempor eros. Cras sit amet laoreet risus. Nulla risus libero, tincidunt sed ornare eu, tempor sit amet diam. Nulla tempus pretium pulvinar. Donec consectetur mauris non tincidunt porta.

Vestibulum ultrices urna in magna scelerisque, eget commodo turpis pellentesque. Curabitur pulvinar vulputate enim. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris vulputate lorem a tincidunt feugiat. Vestibulum porttitor ultricies enim eu pharetra. Proin ultrices malesuada justo, eu porta mauris suscipit ut. Etiam et sodales enim. Ut dignissim fermentum euismod. Donec at ante porta, feugiat elit et, faucibus quam. Maecenas mattis consectetur tincidunt.

Mauris odio metus, molestie non luctus sit amet, efficitur quis nulla. Integer suscipit, enim vitae ullamcorper dictum, tellus diam vulputate dui, eu lacinia arcu nunc eget eros. Donec ac ligula metus. Suspendisse ante lacus, gravida in vestibulum eu, efficitur ut dolor. Integer dictum felis id diam iaculis, convallis faucibus nulla aliquet. Aliquam semper condimentum tempus. Nulla nec placerat augue. Aliquam nec commodo turpis, in dictum metus. Fusce molestie facilisis luctus. Morbi mollis lacus tortor, vitae finibus ante feugiat id. Quisque porttitor, nibh eget viverra suscipit, leo velit congue ligula, non ultricies tellus libero vel sem. Mauris a interdum dolor. Aliquam pretium turpis sagittis viverra faucibus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec finibus orci eu convallis interdum.

Etiam sit amet metus sem. Nam in sem lacinia velit rutrum condimentum. Etiam laoreet odio diam, vitae rhoncus erat cursus sed. Fusce sit amet quam felis. Aenean id eros at mauris tempor iaculis. Nunc eleifend sem id urna fermentum consectetur. Sed eget vulputate leo, id rhoncus magna. Praesent sagittis pellentesque ante vitae fringilla. Phasellus sollicitudin pulvinar sem, in tincidunt felis hendrerit et. Etiam sit amet accumsan magna.
        </p>
    </div>
}

function VerticalCodeLine({props}) {
    return <div className="vertical-code-line">
        <h2 className="vertical-code-line-code">defmodule Portfolio do: def render(:fast, html) do: HtmlRenderer.call(:render, html) end end</h2>
    </div>
}