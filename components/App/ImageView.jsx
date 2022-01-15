import React from 'react'
import ReactTooltip from 'react-tooltip'

export default function ImageView({ src, closeImage }) {
    return (
        <div onClick={ closeImage } id="image-back" className="fixed top-0 right-0 bottom-0 left-0 flex flex-col items-center justify-center backdrop-blur-sm backdrop-filter">
            <img src={ src } alt="" className="max-w-1/2 max-h-2/3 select-none" />
            <div className="space-x-3 flex mt-2">
                <div>
                    <a data-tip="Go Image" href={ src } target="_blank" rel="noreferrer"><i class="fas fa-external-link-alt text-white text-xl"></i></a>
                    <ReactTooltip place="bottom" type="dark" effect="solid" backgroundColor='#111' />
                </div>

                <div>
                    <a download data-tip="Download Image" href={ src } target="_blank" rel="noreferrer"><i class="fas fa-download text-white text-xl"></i></a>
                    <ReactTooltip place="bottom" type="dark" effect="solid" backgroundColor='#111' />
                </div>

                <div>
                    <button data-tip="Copy Link" onClick={ () => { navigator.clipboard.writeText(src) } }><i class="fas fa-link text-white text-xl"></i></button>
                    <ReactTooltip place="bottom" type="dark" effect="solid" backgroundColor='#111' />
                </div>
            </div>
        </div>
    )
}