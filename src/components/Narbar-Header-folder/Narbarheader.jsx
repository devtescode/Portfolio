import React from 'react'
import { useNavigate } from 'react-router-dom'

const Narbarheader = () => {
  const navigate = useNavigate()
  const UploadBtn = () => {
        navigate("/upload")
  
  }
  const HomeBtn = () => {
        navigate("/admindb")
  }
  const HistoryBtn = () => {
        navigate("/history")
  }
  return (
    <>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand" style={{cursor:"pointer"}}>Tescode</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" style={{cursor:"pointer"}} onClick={HomeBtn}>Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" onClick={UploadBtn} style={{cursor:"pointer"}}>Upload</a>
              </li>

              <li class="nav-item">
                <a class="nav-link" style={{cursor:"pointer"}}>Settings</a>
              </li>

              <li class="nav-item">
                <a class="nav-link" style={{cursor:"pointer"}} onClick={HistoryBtn}>History</a>
              </li>

              <li class="nav-item">
                <a class="nav-link disabled" aria-disabled="true">Disabled</a>
              </li>
            </ul>
            <form class="d-flex" role="search">
              <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button class="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Narbarheader