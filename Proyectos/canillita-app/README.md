# TP 5 Canillita APP
## Featuring: React Router, Material UI, Axios


GIT de Canillita: https://github.com/Canillitapp/headlines-api
Material UI React: https://material-ui.com/es/components/app-bar/

Fetch de data: 
BASE_URL: https://api.canillitapp.com
Home: https://api.canillitapp.com/latest/[aaaa-mm-dd]
Category: https://api.canillitapp.com/news/category/[id]
Search: https://api.canillitapp.com/search/[slug]


Util para buscador

javascript````
onKeyPress={(event)=>event.key === 'Enter' ? props.history.push(`/search/${event.target.value}`):null}
export default withRouter(Nav);
````