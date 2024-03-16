export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["cute.jpg","favicon.png","ICON.png","jelly-avatar-icon.png","QCU CAMPUS.jpg","QCU-Build.png","QCULOGO.png"]),
	mimeTypes: {".jpg":"image/jpeg",".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.B8MTsLDo.js","app":"_app/immutable/entry/app.BEz6dcKH.js","imports":["_app/immutable/entry/start.B8MTsLDo.js","_app/immutable/chunks/entry.Cde8vRDK.js","_app/immutable/chunks/scheduler.MQulC-dI.js","_app/immutable/chunks/index.DLB4gsAN.js","_app/immutable/entry/app.BEz6dcKH.js","_app/immutable/chunks/scheduler.MQulC-dI.js","_app/immutable/chunks/index.KfVzBilI.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js')),
			__memo(() => import('./nodes/5.js')),
			__memo(() => import('./nodes/6.js')),
			__memo(() => import('./nodes/7.js')),
			__memo(() => import('./nodes/8.js')),
			__memo(() => import('./nodes/9.js')),
			__memo(() => import('./nodes/10.js')),
			__memo(() => import('./nodes/11.js')),
			__memo(() => import('./nodes/12.js')),
			__memo(() => import('./nodes/13.js')),
			__memo(() => import('./nodes/14.js')),
			__memo(() => import('./nodes/15.js')),
			__memo(() => import('./nodes/16.js')),
			__memo(() => import('./nodes/17.js')),
			__memo(() => import('./nodes/18.js')),
			__memo(() => import('./nodes/19.js')),
			__memo(() => import('./nodes/20.js')),
			__memo(() => import('./nodes/21.js')),
			__memo(() => import('./nodes/22.js')),
			__memo(() => import('./nodes/23.js')),
			__memo(() => import('./nodes/24.js')),
			__memo(() => import('./nodes/25.js')),
			__memo(() => import('./nodes/26.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/Admin/pAccounts",
				pattern: /^\/Admin\/pAccounts\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/Admin/pAddDocs",
				pattern: /^\/Admin\/pAddDocs\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/Admin/pAddaccount",
				pattern: /^\/Admin\/pAddaccount\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/Admin/pAdminDashboard",
				pattern: /^\/Admin\/pAdminDashboard\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/Admin/pAdminLogin",
				pattern: /^\/Admin\/pAdminLogin\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/Admin/pDetailsaccount",
				pattern: /^\/Admin\/pDetailsaccount\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 8 },
				endpoint: null
			},
			{
				id: "/Admin/pDocuments",
				pattern: /^\/Admin\/pDocuments\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 9 },
				endpoint: null
			},
			{
				id: "/Admin/pEdit",
				pattern: /^\/Admin\/pEdit\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 10 },
				endpoint: null
			},
			{
				id: "/Admin/pHistory",
				pattern: /^\/Admin\/pHistory\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 11 },
				endpoint: null
			},
			{
				id: "/Admin/pUsersaccount",
				pattern: /^\/Admin\/pUsersaccount\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 12 },
				endpoint: null
			},
			{
				id: "/Registrar/Login",
				pattern: /^\/Registrar\/Login\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 13 },
				endpoint: null
			},
			{
				id: "/Registrar/RegistrarDashboard",
				pattern: /^\/Registrar\/RegistrarDashboard\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 14 },
				endpoint: null
			},
			{
				id: "/Registrar/RegistrarHistory",
				pattern: /^\/Registrar\/RegistrarHistory\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 15 },
				endpoint: null
			},
			{
				id: "/Registrar/RegistrarRequestInfo",
				pattern: /^\/Registrar\/RegistrarRequestInfo\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 16 },
				endpoint: null
			},
			{
				id: "/Registrar/RegistrarRequests",
				pattern: /^\/Registrar\/RegistrarRequests\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 17 },
				endpoint: null
			},
			{
				id: "/Student/Account",
				pattern: /^\/Student\/Account\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 18 },
				endpoint: null
			},
			{
				id: "/Student/Dashboard",
				pattern: /^\/Student\/Dashboard\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 19 },
				endpoint: null
			},
			{
				id: "/Student/DocumentRequest",
				pattern: /^\/Student\/DocumentRequest\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 20 },
				endpoint: null
			},
			{
				id: "/Student/DocumentRequest/[document]",
				pattern: /^\/Student\/DocumentRequest\/([^/]+?)\/?$/,
				params: [{"name":"document","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 21 },
				endpoint: null
			},
			{
				id: "/Student/Login",
				pattern: /^\/Student\/Login\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 22 },
				endpoint: null
			},
			{
				id: "/Student/Login/ForgotP",
				pattern: /^\/Student\/Login\/ForgotP\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 23 },
				endpoint: null
			},
			{
				id: "/Student/Login/ForgotP/ChangeP",
				pattern: /^\/Student\/Login\/ForgotP\/ChangeP\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 24 },
				endpoint: null
			},
			{
				id: "/Student/RequestDocument.svelte",
				pattern: /^\/Student\/RequestDocument\.svelte\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 25 },
				endpoint: null
			},
			{
				id: "/Student/SignUp",
				pattern: /^\/Student\/SignUp\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 26 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
