import React from 'react'

export default function Footer() {
  return (
    <div className="container">
        <ul className="list-unstyled d-flex justify-content-center">
                <li className="list-group-item m-3 nes-container is-rounded"><a href="mailto:ijcha93@gmail.com"><i class="nes-icon gmail is-medium"></i></a></li>
                <li className="list-group-item m-3 nes-container is-rounded"><a href="https://github.com/chazillaa"><i class="nes-icon github is-medium"></i></a></li>
                <li className="list-group-item m-3 nes-container is-rounded"><a href="https://google.com"><i class="nes-icon linkedin is-medium"></i></a></li>
            </ul>
            <div className="list-unstyled d-flex justify-content-center">
                <p>Created By</p>
                <p className='nes-text is-primary'>Chazilla</p>
                <p>2023</p>
            </div>
      </div>
  )
}