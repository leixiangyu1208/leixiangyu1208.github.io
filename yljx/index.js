Vue.component('no1', {
	template: '',
})
var router = new VueRouter({
			routes: [{
						path: '/',
						component: {
							template: '#no1'
						}
					},
					{
						path: '/no2',
						component: {
							template: '#no2'
						},
						children: [{
								path: '/',
								component: {
									template: `
							<div class="tp" style="width: 1280px; min-height: 600px; margin: 0 auto;">
								<ul>
									<li><div style="width: 270px; min-height: 350px;background: #e9e9e9; padding-left: 30px; padding-top: 30px;">
									<img src="https://ccdn.goodq.top/caches/40c05a76d970c388d38b924930a6f580/aHR0cHM6Ly81N2E3ZTZhYWYyZjc4LnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTYvMDkvODliOWE1ZWI3YjZhYjZkNWZjZjFiNjEyNDAyOWFhMWYtMjEweDIxMC5qcGc_p_p100_p_3D.jpg" >
									<div style="text-align: center; padding-top: 20px;">
										<span style="font-size: 14px; color: #000000;">仪器设备Um350c</span>
										<div>
											<span style="font-size: 10px;">编辑设备副标题</span>
										</div>
									</div>
									</div></li>
									<li>
										<div style="width: 270px; min-height: 350px;background: #e9e9e9; padding-left: 30px; padding-top: 30px;">
										<img src="https://ccdn.goodq.top/caches/40c05a76d970c388d38b924930a6f580/aHR0cHM6Ly81N2E3ZTZhYWYyZjc4LnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTYvMDkvOTQ3M2MwZWI4ODE4ZmYzM2Y5OGFmYWY1ODg2N2I4ZjgtMjEweDIxMC5qcGc_p_p100_p_3D.jpg" >
									<div style="text-align: center; padding-top: 20px;">
										<span style="font-size: 14px; color: #000000;">仪器设备Um350c</span>
										<div>
											<span style="font-size: 10px;">编辑设备副标题</span>
										</div>
									</div>
									</div>
									</li>
									<li>
										<div style="width: 270px; min-height: 350px;background: #e9e9e9; padding-left: 30px; padding-top: 30px;">
										<img src="https://ccdn.goodq.top/caches/40c05a76d970c388d38b924930a6f580/aHR0cHM6Ly81N2E3ZTZhYWYyZjc4LnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTYvMDkvY2Y4YzM5NDJmMjU5YThmYmMzMDA3OWNiMTQ2NjE2MWYtMjEweDIxMC5qcGc_p_p100_p_3D.jpg" >
									<div style="text-align: center; padding-top: 20px;">
										<span style="font-size: 14px; color: #000000;">仪器设备Um350c</span>
										<div>
											<span style="font-size: 10px;">编辑设备副标题</span>
										</div>
									</div>
									</div>
									</li>
									<li>
										<div style="width: 270px; min-height: 350px;background: #e9e9e9; padding-left: 30px; padding-top: 30px;">
										<img src="https://ccdn.goodq.top/caches/40c05a76d970c388d38b924930a6f580/aHR0cHM6Ly81N2E3ZTZhYWYyZjc4LnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTYvMDkvMDE1MmFkNTI5MjBkOWM3YTY4NmM5MjZjOTNhZTczMmMtMjEweDIxMC5qcGc_p_p100_p_3D.jpg" >
									<div style="text-align: center; padding-top: 20px;">
										<span style="font-size: 14px; color: #000000;">仪器设备Um350c</span>
										<div>
											<span style="font-size: 10px;">编辑设备副标题</span>
										</div>
									</div>
									</div>
									</li>
									<li>
										<div style="width: 270px; min-height: 350px;background: #e9e9e9; padding-left: 30px; padding-top: 30px;">
										<img src="https://ccdn.goodq.top/caches/40c05a76d970c388d38b924930a6f580/aHR0cHM6Ly81N2E3ZTZhYWYyZjc4LnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTYvMDkvOTVlZjIxODM2NWUyOGJiODdhNjkwNWE3NDI4N2IxNWQtMjEweDIxMC5qcGc_p_p100_p_3D.jpg" >
									<div style="text-align: center; padding-top: 20px;">
										<span style="font-size: 14px; color: #000000;">仪器设备Um350c</span>
										<div>
											<span style="font-size: 10px;">编辑设备副标题</span>
										</div>
									</div>
									</div>
									</li>
									<li>
										<div style="width: 270px; min-height: 350px;background: #e9e9e9; padding-left: 30px; padding-top: 30px;">
											<img src="https://ccdn.goodq.top/caches/40c05a76d970c388d38b924930a6f580/aHR0cHM6Ly81N2E3ZTZhYWYyZjc4LnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTYvMDkvMjZmZDhlZTY1YmM4YTcwZWZkNGNhOWI3OWFmMDg1NWYtMjEweDIxMC5qcGc_p_p100_p_3D.jpg" >
									<div style="text-align: center; padding-top: 20px;">
										<span style="font-size: 14px; color: #000000;">仪器设备Um350c</span>
										<div>
											<span style="font-size: 10px;">编辑设备副标题</span>
										</div>
									</div>
									</div>
									</li>
									<li>
										<div style="width: 270px; min-height: 350px;background: #e9e9e9; padding-left: 30px; padding-top: 30px;">
										<img src="https://ccdn.goodq.top/caches/40c05a76d970c388d38b924930a6f580/aHR0cHM6Ly81N2E3ZTZhYWYyZjc4LnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTcvMDYvN2Q4YTg0M2ZjODJjNDE3ODdkNTUxNTI1MGZjOWJjZDQtMjEweDIxMC5qcGc_p_p100_p_3D.jpg" >
									<div style="text-align: center; padding-top: 20px;">
										<span style="font-size: 14px; color: #000000;">仪器设备Um350c</span>
										<div>
											<span style="font-size: 10px;">编辑设备副标题</span>
										</div>
									</div>
									</div>
									</li>
									<li>
										<div style="width: 270px; min-height: 350px;background: #e9e9e9; padding-left: 30px; padding-top: 30px;">
										<img src="https://ccdn.goodq.top/caches/40c05a76d970c388d38b924930a6f580/aHR0cHM6Ly81N2E3ZTZhYWYyZjc4LnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTcvMDYvMWM4ODFjMGI3Y2JlMzcwZDUwZjNlOGIzN2U1NzE5ODYtMjEweDIxMC5qcGc_p_p100_p_3D.jpg" >
									<div style="text-align: center; padding-top: 20px;">
										<span style="font-size: 14px; color: #000000;">仪器设备Um350c</span>
										<div>
											<span style="font-size: 10px;">编辑设备副标题</span>
										</div>
									</div>
									</div>
									</li>
								</ul>
							</div>
						`
								}
							},
							{
								path: 'no1',
								component: {
									template: `
						<div class="tp" style="width: 1280px; min-height: 600px; margin: 0 auto;">
							<ul>
								<li><div style="width: 270px; min-height: 350px;background: #e9e9e9; padding-left: 30px; padding-top: 30px;">
								<img src="https://ccdn.goodq.top/caches/40c05a76d970c388d38b924930a6f580/aHR0cHM6Ly81N2E3ZTZhYWYyZjc4LnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTYvMDkvODliOWE1ZWI3YjZhYjZkNWZjZjFiNjEyNDAyOWFhMWYtMjEweDIxMC5qcGc_p_p100_p_3D.jpg" >
								<div style="text-align: center; padding-top: 20px;">
									<span style="font-size: 14px; color: #000000;">仪器设备Um350c</span>
									<div>
										<span style="font-size: 10px;">编辑设备副标题</span>
									</div>
								</div>
								</div></li>
								<li>
									<div style="width: 270px; min-height: 350px;background: #e9e9e9; padding-left: 30px; padding-top: 30px;">
									<img src="https://ccdn.goodq.top/caches/40c05a76d970c388d38b924930a6f580/aHR0cHM6Ly81N2E3ZTZhYWYyZjc4LnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTYvMDkvMDE1MmFkNTI5MjBkOWM3YTY4NmM5MjZjOTNhZTczMmMtMjEweDIxMC5qcGc_p_p100_p_3D.jpg" >
								<div style="text-align: center; padding-top: 20px;">
									<span style="font-size: 14px; color: #000000;">仪器设备Um350c</span>
									<div>
										<span style="font-size: 10px;">编辑设备副标题</span>
									</div>
								</div>
								</div>
								</li>
								<li>
									<div style="width: 270px; min-height: 350px;background: #e9e9e9; padding-left: 30px; padding-top: 30px;">
									<img src="https://ccdn.goodq.top/caches/40c05a76d970c388d38b924930a6f580/aHR0cHM6Ly81N2E3ZTZhYWYyZjc4LnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTcvMDYvN2Q4YTg0M2ZjODJjNDE3ODdkNTUxNTI1MGZjOWJjZDQtMjEweDIxMC5qcGc_p_p100_p_3D.jpg" >
								<div style="text-align: center; padding-top: 20px;">
									<span style="font-size: 14px; color: #000000;">仪器设备Um350c</span>
									<div>
										<span style="font-size: 10px;">编辑设备副标题</span>
									</div>
								</div>
								</div>
								</li>
							</ul>
						</div>
						`
								}
							},
							{
								path: 'no2',
								component: {
									template: `
						<div class="tp" style="width: 1280px; min-height: 600px; margin: 0 auto;">
							<ul>
								<li>
									<div style="width: 270px; min-height: 350px;background: #e9e9e9; padding-left: 30px; padding-top: 30px;">
										<img src="https://ccdn.goodq.top/caches/40c05a76d970c388d38b924930a6f580/aHR0cHM6Ly81N2E3ZTZhYWYyZjc4LnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTYvMDkvY2Y4YzM5NDJmMjU5YThmYmMzMDA3OWNiMTQ2NjE2MWYtMjEweDIxMC5qcGc_p_p100_p_3D.jpg">
										<div style="text-align: center; padding-top: 20px;">
											<span style="font-size: 14px; color: #000000;">仪器设备Um350c</span>
											<div>
												<span style="font-size: 10px;">编辑设备副标题</span>
											</div>
										</div>
									</div>
								</li>
								<li>
									<div style="width: 270px; min-height: 350px;background: #e9e9e9; padding-left: 30px; padding-top: 30px;">
										<img src="https://ccdn.goodq.top/caches/40c05a76d970c388d38b924930a6f580/aHR0cHM6Ly81N2E3ZTZhYWYyZjc4LnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTYvMDkvMjZmZDhlZTY1YmM4YTcwZWZkNGNhOWI3OWFmMDg1NWYtMjEweDIxMC5qcGc_p_p100_p_3D.jpg">
										<div style="text-align: center; padding-top: 20px;">
											<span style="font-size: 14px; color: #000000;">仪器设备Um350c</span>
											<div>
												<span style="font-size: 10px;">编辑设备副标题</span>
											</div>
										</div>
									</div>
								</li>
							</ul>
						</div>
						`
								}
							},
							{
								path: 'no3',
								component: {
									template: `
							<div class="tp" style="width: 1280px; min-height: 600px; margin: 0 auto;">
								<ul>
									<li>
										<div style="width: 270px; min-height: 350px;background: #e9e9e9; padding-left: 30px; padding-top: 30px;">
											<img src="https://ccdn.goodq.top/caches/40c05a76d970c388d38b924930a6f580/aHR0cHM6Ly81N2E3ZTZhYWYyZjc4LnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTYvMDkvOTQ3M2MwZWI4ODE4ZmYzM2Y5OGFmYWY1ODg2N2I4ZjgtMjEweDIxMC5qcGc_p_p100_p_3D.jpg">
											<div style="text-align: center; padding-top: 20px;">
												<span style="font-size: 14px; color: #000000;">仪器设备Um350c</span>
												<div>
													<span style="font-size: 10px;">编辑设备副标题</span>
												</div>
											</div>
										</div>
									</li>
									<li>
										<div style="width: 270px; min-height: 350px;background: #e9e9e9; padding-left: 30px; padding-top: 30px;">
											<img src="https://ccdn.goodq.top/caches/40c05a76d970c388d38b924930a6f580/aHR0cHM6Ly81N2E3ZTZhYWYyZjc4LnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTYvMDkvOTVlZjIxODM2NWUyOGJiODdhNjkwNWE3NDI4N2IxNWQtMjEweDIxMC5qcGc_p_p100_p_3D.jpg">
											<div style="text-align: center; padding-top: 20px;">
												<span style="font-size: 14px; color: #000000;">仪器设备Um350c</span>
												<div>
													<span style="font-size: 10px;">编辑设备副标题</span>
												</div>
											</div>
										</div>
									</li>
									<li>
										<div style="width: 270px; min-height: 350px;background: #e9e9e9; padding-left: 30px; padding-top: 30px;">
											<img src="https://ccdn.goodq.top/caches/40c05a76d970c388d38b924930a6f580/aHR0cHM6Ly81N2E3ZTZhYWYyZjc4LnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTcvMDYvMWM4ODFjMGI3Y2JlMzcwZDUwZjNlOGIzN2U1NzE5ODYtMjEweDIxMC5qcGc_p_p100_p_3D.jpg">
											<div style="text-align: center; padding-top: 20px;">
												<span style="font-size: 14px; color: #000000;">仪器设备Um350c</span>
												<div>
													<span style="font-size: 10px;">编辑设备副标题</span>
												</div>
											</div>
										</div>
									</li>
								</ul>
							</div>
							`
								}
							}
						]
					},
					{
						path: '/no3',
						component: {
							template: '#no3'
						},
						children: [{
									path: '/',
									component: {
										template: `<div style="width: 890px;height: 1433px;">
								<div style="height: 100px;">
									<div style="width: 160px;padding: 0 30px 0 0 ;float: left;">
										<img src="https://ccdn.goodq.top/caches/40c05a76d970c388d38b924930a6f580/aHR0cDovLzU3YTdlNmFhZjJmNzgudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNi8wOS9iODYyMTlmMWJkZjk0YjhmMjU0YmU3NGYzYWY5ZjBhNC0xNjB4MTAwLmpwZw_p_p100_p_3D_p_p100_p_3D.jpg" alt="">
									</div>
									<div style="width: 688px; float: left;">
										<div style="font-size: 16px;color: #000000;">医疗PPP有望成后起之秀 概念股早盘活跃</div>
										<div style="font-size: 12px;color: #afafaf;margin: 12px 0;">发布日期：2017年03月15日</div>
										<div style="font-size: 12px;color: #8c8c8c;line-height: 22px;">当今最领先的响应式自助建站平台，我们的流线式网页布局设计方案和可视化图文内容编辑模式让网站制作和维护成为一件轻松惬意的事。无论您是普通互联网用户， 还是专业网站制作人员，都能使用起飞页设计出最具专业水准的网站。...</div>
									</div>
								</div>
								<div style="margin-top: 60px; height: 100px;">
									<div style="width: 160px;padding: 0 30px 0 0 ;float: left;">
										<img src="https://ccdn.goodq.top/caches/40c05a76d970c388d38b924930a6f580/aHR0cDovLzU3YTdlNmFhZjJmNzgudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNi8wOS9iM2JhNzljNmFhZWY4ZGYyNDM2ZWY2M2ViNjU5YWI4Ni0xNjB4MTAwLmpwZw_p_p100_p_3D_p_p100_p_3D.jpg" alt="">
									</div>
									<div style="width: 688px; float: left;">
										<div style="font-size: 16px;color: #000000;">国产高端医疗设备凭高性价比应对“GPS”垄断局面</div>
										<div style="font-size: 12px;color: #afafaf;margin: 12px 0;">发布日期：2017年03月15日</div>
										<div style="font-size: 12px;color: #8c8c8c;line-height: 22px;">当今最领先的响应式自助建站平台，我们的流线式网页布局设计方案和可视化图文内容编辑模式让网站制作和维护成为一件轻松惬意的事。无论您是普通互联网用户， 还是专业网站制作人员，都能使用起飞页设计出最具专业水准的网站。...</div>
									</div>
								</div>
								<div style="margin-top: 60px; height: 100px;">
									<div style="width: 160px;padding: 0 30px 0 0 ;float: left;">
										<img src="https://ccdn.goodq.top/caches/40c05a76d970c388d38b924930a6f580/aHR0cDovLzU3YTdlNmFhZjJmNzgudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNi8wOS9iMTY3ZjllYWE2NmJlZTAxYjdjMDM3NmU4MjY4ZDE1Ni0xNjB4MTAwLmpwZw_p_p100_p_3D_p_p100_p_3D.jpg" alt="">
									</div>
									<div style="width: 688px; float: left;">
										<div style="font-size: 16px;color: #000000;">医疗器械国产化命脉：“供应商”转型“合作伙伴”</div>
										<div style="font-size: 12px;color: #afafaf;margin: 12px 0;">发布日期：2017年03月15日</div>
										<div style="font-size: 12px;color: #8c8c8c;line-height: 22px;">当今最领先的响应式自助建站平台，我们的流线式网页布局设计方案和可视化图文内容编辑模式让网站制作和维护成为一件轻松惬意的事。无论您是普通互联网用户， 还是专业网站制作人员，都能使用起飞页设计出最具专业水准的网站。...</div>
									</div>
								</div>
								<div style="margin-top: 60px; height: 100px;">
									<div style="width: 160px;padding: 0 30px 0 0 ;float: left;">
										<img src="https://ccdn.goodq.top/caches/40c05a76d970c388d38b924930a6f580/aHR0cDovLzU3YTdlNmFhZjJmNzgudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNi8wOS9lNjRkNTQxNGEzMGUyMTlmNTI1MTc5NWM2ZDU1OGFkYy0xNjB4MTAwLmpwZw_p_p100_p_3D_p_p100_p_3D.jpg" alt="">
									</div>
									<div style="width: 688px; float: left;">
										<div style="font-size: 16px;color: #000000;">医疗器械9只概念股价值解析</div>
										<div style="font-size: 12px;color: #afafaf;margin: 12px 0;">发布日期：2017年03月15日</div>
										<div style="font-size: 12px;color: #8c8c8c;line-height: 22px;">当今最领先的响应式自助建站平台，我们的流线式网页布局设计方案和可视化图文内容编辑模式让网站制作和维护成为一件轻松惬意的事。无论您是普通互联网用户， 还是专业网站制作人员，都能使用起飞页设计出最具专业水准的网站。...</div>
									</div>
								</div>
								<div style="margin-top: 60px; height: 100px;">
									<div style="width: 160px;padding: 0 30px 0 0 ;float: left;">
										<img src="https://ccdn.goodq.top/caches/40c05a76d970c388d38b924930a6f580/aHR0cDovLzU3YTdlNmFhZjJmNzgudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNi8wOC9lZjlkZjA0NWJjNWZkMTRmMDhlNGIyMDVjNjE2NjJkNC0xNjB4MTAwLmpwZw_p_p100_p_3D_p_p100_p_3D.jpg" alt="">
									</div>
									<div style="width: 688px; float: left;">
										<div style="font-size: 16px;color: #000000;">医疗器械抽验 7批产品不合标准</div>
										<div style="font-size: 12px;color: #afafaf;margin: 12px 0;">发布日期：2017年03月15日</div>
										<div style="font-size: 12px;color: #8c8c8c;line-height: 22px;">当今最领先的响应式自助建站平台，我们的流线式网页布局设计方案和可视化图文内容编辑模式让网站制作和维护成为一件轻松惬意的事。无论您是普通互联网用户， 还是专业网站制作人员，都能使用起飞页设计出最具专业水准的网站。...</div>
									</div>
								</div>
								<div style="margin-top: 60px; height: 100px;">
									<div style="width: 160px;padding: 0 30px 0 0 ;float: left;">
										<img src="https://ccdn.goodq.top/caches/40c05a76d970c388d38b924930a6f580/aHR0cDovLzU3YTdlNmFhZjJmNzgudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNi8wOS81MDNmZDY3ZTc5OTEwNTk1MWY4ZTA0OTQ4NTVlNWM1MS0xNjB4MTAwLmpwZw_p_p100_p_3D_p_p100_p_3D.jpg" alt="">
									</div>
									<div style="width: 688px; float: left;">
										<div style="font-size: 16px;color: #000000;">第五届生物产业大会 与专家共议未来发展</div>
										<div style="font-size: 12px;color: #afafaf;margin: 12px 0;">发布日期：2017年03月15日</div>
										<div style="font-size: 12px;color: #8c8c8c;line-height: 22px;">当今最领先的响应式自助建站平台，我们的流线式网页布局设计方案和可视化图文内容编辑模式让网站制作和维护成为一件轻松惬意的事。无论您是普通互联网用户， 还是专业网站制作人员，都能使用起飞页设计出最具专业水准的网站。...</div>
									</div>
								</div>
								<div style="margin-top: 60px; height: 100px;">
									<div style="width: 160px;padding: 0 30px 0 0 ;float: left;">
										<img src="https://ccdn.goodq.top/caches/40c05a76d970c388d38b924930a6f580/aHR0cDovLzU3YTdlNmFhZjJmNzgudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNi8wOC9iZWU1YjQxYTc2YThlYWFlM2EyYWYwNTljZjdhZGNjZS0xNjB4MTAwLmpwZw_p_p100_p_3D_p_p100_p_3D.jpg" alt="">
									</div>
									<div style="width: 688px; float: left;">
										<div style="font-size: 16px;color: #000000;">医疗器械国产化命脉：“供应商”转型“合作伙伴”</div>
										<div style="font-size: 12px;color: #afafaf;margin: 12px 0;">发布日期：2017年03月15日</div>
										<div style="font-size: 12px;color: #8c8c8c;line-height: 22px;">当今最领先的响应式自助建站平台，我们的流线式网页布局设计方案和可视化图文内容编辑模式让网站制作和维护成为一件轻松惬意的事。无论您是普通互联网用户， 还是专业网站制作人员，都能使用起飞页设计出最具专业水准的网站。...</div>
									</div>
								</div>
								<div style="margin-top: 60px; height: 100px;">
									<div style="width: 160px;padding: 0 30px 0 0 ;float: left;">
										<img src="https://ccdn.goodq.top/caches/40c05a76d970c388d38b924930a6f580/aHR0cDovLzU3YTdlNmFhZjJmNzgudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNi8wOS85NWVmMjE4MzY1ZTI4YmI4N2E2OTA1YTc0Mjg3YjE1ZC0xNjB4MTAwLmpwZw_p_p100_p_3D_p_p100_p_3D.jpg" alt="">
									</div>
									<div style="width: 688px; float: left;">
										<div style="font-size: 16px;color: #000000;">医疗器械行业上半年利润增速达29.30%</div>
										<div style="font-size: 12px;color: #afafaf;margin: 12px 0;">发布日期：2017年03月15日</div>
										<div style="font-size: 12px;color: #8c8c8c;line-height: 22px;">当今最领先的响应式自助建站平台，我们的流线式网页布局设计方案和可视化图文内容编辑模式让网站制作和维护成为一件轻松惬意的事。无论您是普通互联网用户， 还是专业网站制作人员，都能使用起飞页设计出最具专业水准的网站。...</div>
									</div>
								</div>
								<div style="margin-top: 60px; height: 100px;">
									<div style="width: 160px;padding: 0 30px 0 0 ;float: left;">
										<img src="https://ccdn.goodq.top/caches/40c05a76d970c388d38b924930a6f580/aHR0cDovLzU3YTdlNmFhZjJmNzgudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNy8wNi8xMGMyNGU3YjY2ZGYxZDkyNmI3MzBmNmM1NWZmYzhjZS0xNjB4MTAwLnBuZw_p_p100_p_3D_p_p100_p_3D.png" alt="">
									</div>
									<div style="width: 688px; float: left;">
										<div style="font-size: 16px;color: #000000;">20种进口医疗器械产品减税力度空前</div>
										<div style="font-size: 12px;color: #afafaf;margin: 12px 0;">发布日期：2017年03月15日</div>
										<div style="font-size: 12px;color: #8c8c8c;line-height: 22px;">当今最领先的响应式自助建站平台，我们的流线式网页布局设计方案和可视化图文内容编辑模式让网站制作和维护成为一件轻松惬意的事。无论您是普通互联网用户， 还是专业网站制作人员，都能使用起飞页设计出最具专业水准的网站。...</div>
									</div>
								</div>
							</div>`
									}
								},
								{
									path: 'no1',
									component: {
										template: `<div style="width: 890px;height: 1433px;">
										<div style="height: 100px;">
											<div style="width: 160px;padding: 0 30px 0 0 ;float: left;">
												<img src="https://ccdn.goodq.top/caches/40c05a76d970c388d38b924930a6f580/aHR0cDovLzU3YTdlNmFhZjJmNzgudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNi8wOS9iM2JhNzljNmFhZWY4ZGYyNDM2ZWY2M2ViNjU5YWI4Ni0xNjB4MTAwLmpwZw_p_p100_p_3D_p_p100_p_3D.jpg" alt="">
											</div>
											<div style="width: 688px; float: left;">
												<div style="font-size: 16px;color: #000000;">医疗PPP有望成后起之秀 概念股早盘活跃</div>
												<div style="font-size: 12px;color: #afafaf;margin: 12px 0;">发布日期：2017年03月15日</div>
												<div style="font-size: 12px;color: #8c8c8c;line-height: 22px;">当今最领先的响应式自助建站平台，我们的流线式网页布局设计方案和可视化图文内容编辑模式让网站制作和维护成为一件轻松惬意的事。无论您是普通互联网用户， 还是专业网站制作人员，都能使用起飞页设计出最具专业水准的网站。...</div>
											</div>
										</div>
										<div style="margin-top: 60px; height: 100px;">
											<div style="width: 160px;padding: 0 30px 0 0 ;float: left;">
												<img src="https://ccdn.goodq.top/caches/40c05a76d970c388d38b924930a6f580/aHR0cDovLzU3YTdlNmFhZjJmNzgudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNi8wOS9iODYyMTlmMWJkZjk0YjhmMjU0YmU3NGYzYWY5ZjBhNC0xNjB4MTAwLmpwZw_p_p100_p_3D_p_p100_p_3D.jpg" alt="">
											</div>
											<div style="width: 688px; float: left;">
												<div style="font-size: 16px;color: #000000;">国产高端医疗设备凭高性价比应对“GPS”垄断局面</div>
												<div style="font-size: 12px;color: #afafaf;margin: 12px 0;">发布日期：2017年03月15日</div>
												<div style="font-size: 12px;color: #8c8c8c;line-height: 22px;">当今最领先的响应式自助建站平台，我们的流线式网页布局设计方案和可视化图文内容编辑模式让网站制作和维护成为一件轻松惬意的事。无论您是普通互联网用户， 还是专业网站制作人员，都能使用起飞页设计出最具专业水准的网站。...</div>
											</div>
										</div>
										<div style="margin-top: 60px; height: 100px;">
											<div style="width: 160px;padding: 0 30px 0 0 ;float: left;">
												<img src="https://ccdn.goodq.top/caches/40c05a76d970c388d38b924930a6f580/aHR0cDovLzU3YTdlNmFhZjJmNzgudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNi8wOS9iMTY3ZjllYWE2NmJlZTAxYjdjMDM3NmU4MjY4ZDE1Ni0xNjB4MTAwLmpwZw_p_p100_p_3D_p_p100_p_3D.jpg" alt="">
											</div>
											<div style="width: 688px; float: left;">
												<div style="font-size: 16px;color: #000000;">医疗器械国产化命脉：“供应商”转型“合作伙伴”</div>
												<div style="font-size: 12px;color: #afafaf;margin: 12px 0;">发布日期：2017年03月15日</div>
												<div style="font-size: 12px;color: #8c8c8c;line-height: 22px;">当今最领先的响应式自助建站平台，我们的流线式网页布局设计方案和可视化图文内容编辑模式让网站制作和维护成为一件轻松惬意的事。无论您是普通互联网用户， 还是专业网站制作人员，都能使用起飞页设计出最具专业水准的网站。...</div>
											</div>
										</div>
										<div style="margin-top: 60px; height: 100px;">
											<div style="width: 160px;padding: 0 30px 0 0 ;float: left;">
												<img src="https://ccdn.goodq.top/caches/40c05a76d970c388d38b924930a6f580/aHR0cDovLzU3YTdlNmFhZjJmNzgudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNi8wOS9lNjRkNTQxNGEzMGUyMTlmNTI1MTc5NWM2ZDU1OGFkYy0xNjB4MTAwLmpwZw_p_p100_p_3D_p_p100_p_3D.jpg" alt="">
											</div>
											<div style="width: 688px; float: left;">
												<div style="font-size: 16px;color: #000000;">医疗器械9只概念股价值解析</div>
												<div style="font-size: 12px;color: #afafaf;margin: 12px 0;">发布日期：2017年03月15日</div>
												<div style="font-size: 12px;color: #8c8c8c;line-height: 22px;">当今最领先的响应式自助建站平台，我们的流线式网页布局设计方案和可视化图文内容编辑模式让网站制作和维护成为一件轻松惬意的事。无论您是普通互联网用户， 还是专业网站制作人员，都能使用起飞页设计出最具专业水准的网站。...</div>
											</div>
										</div>
										<div style="margin-top: 60px; height: 100px;">
											<div style="width: 160px;padding: 0 30px 0 0 ;float: left;">
												<img src="https://ccdn.goodq.top/caches/40c05a76d970c388d38b924930a6f580/aHR0cDovLzU3YTdlNmFhZjJmNzgudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNi8wOC9lZjlkZjA0NWJjNWZkMTRmMDhlNGIyMDVjNjE2NjJkNC0xNjB4MTAwLmpwZw_p_p100_p_3D_p_p100_p_3D.jpg" alt="">
											</div>
											<div style="width: 688px; float: left;">
												<div style="font-size: 16px;color: #000000;">医疗器械抽验 7批产品不合标准</div>
												<div style="font-size: 12px;color: #afafaf;margin: 12px 0;">发布日期：2017年03月15日</div>
												<div style="font-size: 12px;color: #8c8c8c;line-height: 22px;">当今最领先的响应式自助建站平台，我们的流线式网页布局设计方案和可视化图文内容编辑模式让网站制作和维护成为一件轻松惬意的事。无论您是普通互联网用户， 还是专业网站制作人员，都能使用起飞页设计出最具专业水准的网站。...</div>
											</div>
										</div>
										<div style="margin-top: 60px; height: 100px;">
											<div style="width: 160px;padding: 0 30px 0 0 ;float: left;">
												<img src="https://ccdn.goodq.top/caches/40c05a76d970c388d38b924930a6f580/aHR0cDovLzU3YTdlNmFhZjJmNzgudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNi8wOS81MDNmZDY3ZTc5OTEwNTk1MWY4ZTA0OTQ4NTVlNWM1MS0xNjB4MTAwLmpwZw_p_p100_p_3D_p_p100_p_3D.jpg" alt="">
											</div>
											<div style="width: 688px; float: left;">
												<div style="font-size: 16px;color: #000000;">第五届生物产业大会 与专家共议未来发展</div>
												<div style="font-size: 12px;color: #afafaf;margin: 12px 0;">发布日期：2017年03月15日</div>
												<div style="font-size: 12px;color: #8c8c8c;line-height: 22px;">当今最领先的响应式自助建站平台，我们的流线式网页布局设计方案和可视化图文内容编辑模式让网站制作和维护成为一件轻松惬意的事。无论您是普通互联网用户， 还是专业网站制作人员，都能使用起飞页设计出最具专业水准的网站。...</div>
											</div>
										</div>
										<div style="margin-top: 60px; height: 100px;">
											<div style="width: 160px;padding: 0 30px 0 0 ;float: left;">
												<img src="https://ccdn.goodq.top/caches/40c05a76d970c388d38b924930a6f580/aHR0cDovLzU3YTdlNmFhZjJmNzgudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNi8wOC9iZWU1YjQxYTc2YThlYWFlM2EyYWYwNTljZjdhZGNjZS0xNjB4MTAwLmpwZw_p_p100_p_3D_p_p100_p_3D.jpg" alt="">
											</div>
											<div style="width: 688px; float: left;">
												<div style="font-size: 16px;color: #000000;">医疗器械国产化命脉：“供应商”转型“合作伙伴”</div>
												<div style="font-size: 12px;color: #afafaf;margin: 12px 0;">发布日期：2017年03月15日</div>
												<div style="font-size: 12px;color: #8c8c8c;line-height: 22px;">当今最领先的响应式自助建站平台，我们的流线式网页布局设计方案和可视化图文内容编辑模式让网站制作和维护成为一件轻松惬意的事。无论您是普通互联网用户， 还是专业网站制作人员，都能使用起飞页设计出最具专业水准的网站。...</div>
											</div>
										</div>
										<div style="margin-top: 60px; height: 100px;">
											<div style="width: 160px;padding: 0 30px 0 0 ;float: left;">
												<img src="https://ccdn.goodq.top/caches/40c05a76d970c388d38b924930a6f580/aHR0cDovLzU3YTdlNmFhZjJmNzgudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNi8wOS85NWVmMjE4MzY1ZTI4YmI4N2E2OTA1YTc0Mjg3YjE1ZC0xNjB4MTAwLmpwZw_p_p100_p_3D_p_p100_p_3D.jpg" alt="">
											</div>
											<div style="width: 688px; float: left;">
												<div style="font-size: 16px;color: #000000;">医疗器械行业上半年利润增速达29.30%</div>
												<div style="font-size: 12px;color: #afafaf;margin: 12px 0;">发布日期：2017年03月15日</div>
												<div style="font-size: 12px;color: #8c8c8c;line-height: 22px;">当今最领先的响应式自助建站平台，我们的流线式网页布局设计方案和可视化图文内容编辑模式让网站制作和维护成为一件轻松惬意的事。无论您是普通互联网用户， 还是专业网站制作人员，都能使用起飞页设计出最具专业水准的网站。...</div>
											</div>
										</div>
										<div style="margin-top: 60px; height: 100px;">
											<div style="width: 160px;padding: 0 30px 0 0 ;float: left;">
												<img src="https://ccdn.goodq.top/caches/40c05a76d970c388d38b924930a6f580/aHR0cDovLzU3YTdlNmFhZjJmNzgudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNy8wNi8xMGMyNGU3YjY2ZGYxZDkyNmI3MzBmNmM1NWZmYzhjZS0xNjB4MTAwLnBuZw_p_p100_p_3D_p_p100_p_3D.png" alt="">
											</div>
											<div style="width: 688px; float: left;">
												<div style="font-size: 16px;color: #000000;">20种进口医疗器械产品减税力度空前</div>
												<div style="font-size: 12px;color: #afafaf;margin: 12px 0;">发布日期：2017年03月15日</div>
												<div style="font-size: 12px;color: #8c8c8c;line-height: 22px;">当今最领先的响应式自助建站平台，我们的流线式网页布局设计方案和可视化图文内容编辑模式让网站制作和维护成为一件轻松惬意的事。无论您是普通互联网用户， 还是专业网站制作人员，都能使用起飞页设计出最具专业水准的网站。...</div>
											</div>
										</div>
									</div>`
										
								}
							}
							
							]
		},
		{
			path: '/no4',
			component: {
				template: '#no4'
			},
			children:[
				{
					path:'/',
					component:{
						template:`<div><div style="width: 890px;min-height: 600px;border: 1px solid #C0C0C0; padding: 10px; margin-bottom: 60px;">
					<div style="width: 100%;min-height: 51px; border-bottom: 1px solid #C0C0C0; margin-bottom: 20px;">
					<div>
							<span style="font-size: 18px;"><strong>区域销售经理</strong></span>
					</div>
					<span style="font-size: 12px; color: #C0C0C0;">发布日期：2016-08-10</span>
					</div>
					<div>
						<div>
							<div style="width: 50%; float: left;">
								<span style="font-size: 15px;">公司事业部：<strong>某某公司</strong></span>
								<br>
								<span style="font-size: 15px;">工作地点：<strong>北京</strong></span>
							</div>
							<div style="width: 50%; float: left;">
								<span style="font-size: 15px;">职位性质：<strong>制造/生产/加工</strong></span>
								<br>
								<span style="font-size: 15px;">招聘人数：<strong>10</strong></span>
							</div>
						</div>
						<div style="padding: 30px;"></div>
						<div>
							<span style="font-size: 15px;">职位概述：</span>
							<br>
							<span style="color:#808080; font-size: 14px;">负责公司全产品华东区域分销工作。</span>
						</div>
						<div style="padding: 20px;"></div>
						<div>
							<span><strong style="font-size: 15px;">职位描述：</strong></span>
							<p><span style="color:#808080;"><span style="font-size: 14px;"><span style="font-family: 微软雅黑;">1. 负责指定地区设备的市场推广工作，完成各项销售目标；<br>
							2. 负责完成订单并跟进，确保产品能够及时安装，提高客户满意度；<br>
							3. 参与招投标工作，协调市场、产品、销售、物流和服务部门参与项目后期工作；<br>
							4. 参与区域市场营销活动,了解参与此类活动的客户信息和动态；<br>
							5. 定期拜访客户，收集客户需求信息并形成拜访报告,协调相关部门解决客户提出的问题；<br>
							6. 参加销售培训，完成市场信息的收集和分析，周期性向销售经理汇报总结。</span></span></span></p>
						</div>
						<div style="width: 100%; border-bottom: 1px solid #C0C0C0;">
							<span style="font-size: 15px;">任职条件：</span>
							<p><span style="color:#808080;"><span style="font-size: 14px;"><span style="font-family: 微软雅黑;">1. 理工科相关专业，大学本科以上学历；<br>
							2. 5年以上相关行业销售岗位经验，有大型设备销售经验者优先；<br>
							3. 掌握公司所在的行业动态，了解公司所经营的产品技术特点；<br>
							4. 优秀的沟通与执行能力，良好的客户服务意识，高度的敬业精神；<br>
							5. 熟练使用WORD，EXCEL，POWERPOINT等办公软件，良好的英语应用能力。</span></span></span></p>
						</div>
					</div>
					<button onmouseleave="this.style.borderColor='#e30083'; this.style.backgroundColor='#e30083'; this.style.color='#ffffff';" onmouseenter="this.style.backgroundColor='#a72283'; this.style.borderColor='#a72283'; this.style.color='#fff';" style=" margin: 30px; font-size: 16px; padding: 10px 30px; border-width: 1px; border-color: rgb(227, 0, 131); background-color: rgb(227, 0, 131); color: rgb(255, 255, 255);" class="vc_general vc_btn3 vc_btn3-size-sm vc_btn3-shape-square vc_btn3-style-qfy-custom">申请该职位</button>
				</div>
				<div style="width: 890px;min-height: 600px;border: 1px solid #C0C0C0; padding: 10px; margin-bottom: 60px;">
					<div style="width: 100%;min-height: 51px; border-bottom: 1px solid #C0C0C0; margin-bottom: 20px;">
					<div>
							<span style="font-size: 18px;"><strong>区域销售经理</strong></span>
					</div>
					<span style="font-size: 12px; color: #C0C0C0;">发布日期：2016-08-10</span>
					</div>
					<div>
						<div>
							<div style="width: 50%; float: left;">
								<span style="font-size: 15px;">公司事业部：<strong>某某公司</strong></span>
								<br>
								<span style="font-size: 15px;">工作地点：<strong>北京</strong></span>
							</div>
							<div style="width: 50%; float: left;">
								<span style="font-size: 15px;">职位性质：<strong>制造/生产/加工</strong></span>
								<br>
								<span style="font-size: 15px;">招聘人数：<strong>10</strong></span>
							</div>
						</div>
						<div style="padding: 30px;"></div>
						<div>
							<span style="font-size: 15px;">职位概述：</span>
							<br>
							<span style="color:#808080; font-size: 14px;">负责公司全产品华东区域分销工作。</span>
						</div>
						<div style="padding: 20px;"></div>
						<div>
							<span><strong style="font-size: 15px;">职位描述：</strong></span>
							<p><span style="color:#808080;"><span style="font-size: 14px;"><span style="font-family: 微软雅黑;">1. 负责指定地区设备的市场推广工作，完成各项销售目标；<br>
							2. 负责完成订单并跟进，确保产品能够及时安装，提高客户满意度；<br>
							3. 参与招投标工作，协调市场、产品、销售、物流和服务部门参与项目后期工作；<br>
							4. 参与区域市场营销活动,了解参与此类活动的客户信息和动态；<br>
							5. 定期拜访客户，收集客户需求信息并形成拜访报告,协调相关部门解决客户提出的问题；<br>
							6. 参加销售培训，完成市场信息的收集和分析，周期性向销售经理汇报总结。</span></span></span></p>
						</div>
						<div style="width: 100%; border-bottom: 1px solid #C0C0C0;">
							<span style="font-size: 15px;">任职条件：</span>
							<p><span style="color:#808080;"><span style="font-size: 14px;"><span style="font-family: 微软雅黑;">1. 理工科相关专业，大学本科以上学历；<br>
							2. 5年以上相关行业销售岗位经验，有大型设备销售经验者优先；<br>
							3. 掌握公司所在的行业动态，了解公司所经营的产品技术特点；<br>
							4. 优秀的沟通与执行能力，良好的客户服务意识，高度的敬业精神；<br>
							5. 熟练使用WORD，EXCEL，POWERPOINT等办公软件，良好的英语应用能力。</span></span></span></p>
						</div>
					</div>
					<button onmouseleave="this.style.borderColor='#e30083'; this.style.backgroundColor='#e30083'; this.style.color='#ffffff';" onmouseenter="this.style.backgroundColor='#a72283'; this.style.borderColor='#a72283'; this.style.color='#fff';" style=" margin: 30px; font-size: 16px; padding: 10px 30px; border-width: 1px; border-color: rgb(227, 0, 131); background-color: rgb(227, 0, 131); color: rgb(255, 255, 255);" class="vc_general vc_btn3 vc_btn3-size-sm vc_btn3-shape-square vc_btn3-style-qfy-custom">申请该职位</button>
				</div>
				<div style="width: 890px;min-height: 600px;border: 1px solid #C0C0C0; padding: 10px; margin-bottom: 60px;">
					<div style="width: 100%;min-height: 51px; border-bottom: 1px solid #C0C0C0; margin-bottom: 20px;">
					<div>
							<span style="font-size: 18px;"><strong>区域销售经理</strong></span>
					</div>
					<span style="font-size: 12px; color: #C0C0C0;">发布日期：2016-08-10</span>
					</div>
					<div>
						<div>
							<div style="width: 50%; float: left;">
								<span style="font-size: 15px;">公司事业部：<strong>某某公司</strong></span>
								<br>
								<span style="font-size: 15px;">工作地点：<strong>北京</strong></span>
							</div>
							<div style="width: 50%; float: left;">
								<span style="font-size: 15px;">职位性质：<strong>制造/生产/加工</strong></span>
								<br>
								<span style="font-size: 15px;">招聘人数：<strong>10</strong></span>
							</div>
						</div>
						<div style="padding: 30px;"></div>
						<div>
							<span style="font-size: 15px;">职位概述：</span>
							<br>
							<span style="color:#808080; font-size: 14px;">负责公司全产品华东区域分销工作。</span>
						</div>
						<div style="padding: 20px;"></div>
						<div>
							<span><strong style="font-size: 15px;">职位描述：</strong></span>
							<p><span style="color:#808080;"><span style="font-size: 14px;"><span style="font-family: 微软雅黑;">1. 负责指定地区设备的市场推广工作，完成各项销售目标；<br>
							2. 负责完成订单并跟进，确保产品能够及时安装，提高客户满意度；<br>
							3. 参与招投标工作，协调市场、产品、销售、物流和服务部门参与项目后期工作；<br>
							4. 参与区域市场营销活动,了解参与此类活动的客户信息和动态；<br>
							5. 定期拜访客户，收集客户需求信息并形成拜访报告,协调相关部门解决客户提出的问题；<br>
							6. 参加销售培训，完成市场信息的收集和分析，周期性向销售经理汇报总结。</span></span></span></p>
						</div>
						<div style="width: 100%; border-bottom: 1px solid #C0C0C0;">
							<span style="font-size: 15px;">任职条件：</span>
							<p><span style="color:#808080;"><span style="font-size: 14px;"><span style="font-family: 微软雅黑;">1. 理工科相关专业，大学本科以上学历；<br>
							2. 5年以上相关行业销售岗位经验，有大型设备销售经验者优先；<br>
							3. 掌握公司所在的行业动态，了解公司所经营的产品技术特点；<br>
							4. 优秀的沟通与执行能力，良好的客户服务意识，高度的敬业精神；<br>
							5. 熟练使用WORD，EXCEL，POWERPOINT等办公软件，良好的英语应用能力。</span></span></span></p>
						</div>
					</div>
					<button onmouseleave="this.style.borderColor='#e30083'; this.style.backgroundColor='#e30083'; this.style.color='#ffffff';" onmouseenter="this.style.backgroundColor='#a72283'; this.style.borderColor='#a72283'; this.style.color='#fff';" style=" margin: 30px; font-size: 16px; padding: 10px 30px; border-width: 1px; border-color: rgb(227, 0, 131); background-color: rgb(227, 0, 131); color: rgb(255, 255, 255);" class="vc_general vc_btn3 vc_btn3-size-sm vc_btn3-shape-square vc_btn3-style-qfy-custom">申请该职位</button>
				</div><div>`
					}
				}
			]
		},
		{
			path: '/no5',
			component: {
				template: '#no5'
			}
		}
	]
})
new Vue({
	el: '#box',
	router
})
 var swiper = new Swiper('.swiper-container', {
      slidesPerView: 1,
      spaceBetween: 30,
      keyboard: {
        enabled: true,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
