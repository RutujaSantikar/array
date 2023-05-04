import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'array';

  ngOnInit(): void {
    // this.displayName();
    this.displayMagnification();
  }

  // data = [
  //   {
  //     data1: [
  //       {
  //         id: 1,
  //       },
  //       {
  //         id: 2,
  //       },
  //       {
  //         id: 3,
  //       },
  //       {
  //         id: 4,
  //       },
  //       {
  //         id: 5,
  //       },
  //     ],
  //   },
  // ];

  // data2 = [
  //   {
  //     id: 5,
  //     name: 'Rutuja Santikar',
  //   },
  // ];
  // displayName() {
  //   for (let i = 0; i < this.data.length; i++) {
  //     for (let j = 0; j < this.data[i].data1.length; j++) {
  //       for (let k = 0; k < this.data2.length; k++) {
  //         if (this.data[i].data1[j].id == this.data2[k].id) {
  //           console.log('hello');
  //           console.log(this.data2[k].name);
  //         }
  //       }
  //     }
  //   }
  // }

  data1 = [
    {
      id: '5f9f5c3b1d9d1e0017e9e2a1',
      name: 'Calibration Report',
      description: 'Calibration Report',
      type: 'CALIBRATION',
      templateId: '64382a9bd1b32ceeefabc999',
      calibrationReport: [
        {
          calRepId: 'calRep5f9f5c3b1d9d1e0017e9e2a1',
          remark: 'Calibration Report',
          from: '2020-10-30T00:00:00.000Z',
          to: '2020-10-30T00:00:00.000Z',
          createdAt: '2020-11-02T06:30:03.000Z',
          updatedAt: '2020-11-02T06:30:03.000Z',
          id: '5f9f5c3b1d9d1e0017e9e2a2',
          status: 'PENDING',
          instrument: [
            {
              id: 'ins5f9f5c3b1d9d1e0017e9e2a1',
              name: 'Instrument Report',
              description: 'Instrument Report',
              type: 'INSTRUMENT',
              templateId: '64382a9bd1b32ceeefabc999',
              instrumentReport: [
                {
                  instrumentId: 'insRep5f9f5c3b1d9d1e0017e9e2a1',
                  remark: 'Instrument Report',
                  from: '2020-10-30T00:00:00.000Z',
                  to: '2020-10-30T00:00:00.000Z',
                  createdAt: '2020-11-02T06:30:03.000Z',
                  updatedAt: '2020-11-02T06:30:03.000Z',
                  magnification: [
                    {
                      id: 'mag5f9f5c3b1d9d1e0017e9e2a1',
                      name: '10X',
                      description: 'Magnification Report',
                    },
                    {
                      id: 'mag5f9f5c3b1d9d1e0017e9e2a2',
                      name: '20X',
                      description: 'Magnification Report',
                    },
                  ],
                },
                {
                  instrumentId: 'insRep5f9f5c3b1d9d1e0017e9e2a2',
                  remark: 'Instrument Report',
                  from: '2020-10-30T00:00:00.000Z',
                  to: '2020-10-30T00:00:00.000Z',
                  createdAt: '2020-11-02T06:30:03.000Z',
                  updatedAt: '2020-11-02T06:30:03.000Z',
                },
              ],
            },
          ],
        },
      ],
    },
  ];

  data2 = [
    {
      magnification: [
        {
          id: 'mag5f9f5c3b1d9d1e0017e9e2a1',
          name: '10X',
        },
        {
          id: 'mag5f9f5c3b1d9d1e0017e9e2a2',
          name: '20X',
        },
        {
          id: 'mag5f9f5c3b1d9d1e0017e9e2a3',
          name: '30X',
        },
        {
          id: 'mag5f9f5c3b1d9d1e0017e9e2a4',
          name: '40X',
        },
      ],
    },
  ];

  displayMagnification() {
    // for (let i = 0; i < this.data1.length; i++) {
    //   for (let j = 0; j < this.data1[i].calibrationReport.length; j++) {
    //     for (
    //       let k = 0;
    //       k < this.data1[i].calibrationReport[j].instrument.length;
    //       k++
    //     ) {
    //       for (
    //         let l = 0;
    //         l <
    //         this.data1[i].calibrationReport[j].instrument[k].instrumentReport
    //           .length;
    //         l++
    //       ) {
    //         if (
    //           this.data1[i].calibrationReport[j].instrument[k].instrumentReport[
    //             l
    //           ] &&
    //           this.data1[i].calibrationReport[j].instrument[k].instrumentReport[
    //             l
    //           ].magnification
    //         ) {
    //           for (
    //             let m = 0;
    //             m <
    //             this.data1[i].calibrationReport[j].instrument[k]
    //               .instrumentReport[l].magnification.length;
    //             m++
    //           ) {
    //             for (let n = 0; n < this.data2.length; n++) {
    //               for (let o = 0; o < this.data2[n].magnification.length; o++) {
    //                 if (
    //                   this.data1[i].calibrationReport[j].instrument[k]
    //                     .instrumentReport[l].magnification[m].id ==
    //                   this.data2[n].magnification[o].id
    //                 ) {
    //                   console.log(this.data2[n].magnification[o]);
    //                 }
    //               }
    //             }
    //           }
    //         }
    //       }
    //     }
    //   }
    // }
    if (this.data1 && Array.isArray(this.data1)) {
      for (let i = 0; i < this.data1.length; i++) {
        if (
          this.data1[i].calibrationReport &&
          Array.isArray(this.data1[i].calibrationReport)
        ) {
          for (let j = 0; j < this.data1[i].calibrationReport.length; j++) {
            if (
              this.data1[i].calibrationReport[j].instrument &&
              Array.isArray(this.data1[i].calibrationReport[j].instrument)
            ) {
              for (
                let k = 0;
                k <
                this.data1[i].calibrationReport[j].instrument[k]
                  .instrumentReport.length;
                k++
              ) {
                const instrumentReport =
                  this.data1[i].calibrationReport[j].instrument[k]
                    .instrumentReport[k];
                if (
                  instrumentReport &&
                  instrumentReport.magnification &&
                  Array.isArray(instrumentReport.magnification)
                ) {
                  const magnificationLength =
                    instrumentReport.magnification.length;
                  for (let l = 0; l < magnificationLength; l++) {
                    for (let m = 0; m < this.data2.length; m++) {
                      if (
                        this.data2[m].magnification &&
                        Array.isArray(this.data2[m].magnification)
                      ) {
                        const data2MagnificationLength =
                          this.data2[m].magnification.length;
                        for (let n = 0; n < data2MagnificationLength; n++) {
                          if (
                            instrumentReport.magnification[l].id ==
                            this.data2[m].magnification[n].id
                          ) {
                            console.log(this.data2[m].magnification[n]);
                          }
                        }
                      }
                    }
                  }
                } else {
                  // Handle the case where magnification is undefined or null
                }
              }
            }
          }
        }
      }
    }
  }
}
