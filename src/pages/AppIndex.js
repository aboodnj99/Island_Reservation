import React from 'react';
import './appIndex.css';
/**
 * app home
 */
 class AppIndex extends React.Component {
  render(){
    return (
    <div className="row">
      <div className="col-lg-3 col-md-4 col-sm-12">
        <div className="card">
          <div className="card-body">
            <div className="card">
              <img src="1.jpg" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Providence Cialis Island</h5>
                <div className='card-info'>
                  <div className='card-info-number'>4.9 km</div>
                </div>
                <div className='card-info-dot'>Area 1278781 sq.m</div>
                <a href='/detail/1' className='btn btn-link'>Detail</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-md-4 col-sm-12">
        <div className="card">
          <div className="card-body">
            <div className="card">
              <img src="2.jpg" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Maui, Hawaii</h5>
                <div className='card-info'>
                  <div className='card-info-number'>8.9 km</div>
                </div>
                <div className='card-info-dot'>Area 45780 sq.m</div>
                <a href='/detail/2' className='btn btn-link'>Detail</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-md-4 col-sm-12">
        <div className="card">
          <div className="card-body">
            <div className="card">
              <img src="3.jpg" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Santorini</h5>
                <div className='card-info'>
                  <div className='card-info-number'>8.9 km</div>
                </div>
                <div className='card-info-dot'>Area 85124545 sq.m</div>
                <a href='/detail/3' className='btn btn-link'>Detail</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-md-4 col-sm-12">
        <div className="card">
          <div className="card-body">
            <div className="card">
              <img src="4.jpg" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Madeira, Portugal</h5>
                <div className='card-info'>
                  <div className='card-info-number'>40.9 km</div>
                </div>
                <div className='card-info-dot'>Area 878112 sq.m</div>
                <a href='/detail/4' className='btn btn-link'>Detail</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>);
  }
 }

 export default AppIndex;