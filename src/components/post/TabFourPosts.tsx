import { gql, useQuery } from '@apollo/client';
import { Box, Grid, Paper, Tab, Tabs, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import FitnessCenterIcon from '@material-ui/icons/FitnessCenter';
import ImportantDevicesIcon from '@material-ui/icons/ImportantDevices';
import SportsBasketballIcon from '@material-ui/icons/SportsBasketball';
import { Skeleton } from '@material-ui/lab';
import React from 'react';
import FeaturedPost from './FeaturedPost';
import SlidePosts from './SlidePosts';


interface TabPanelProps {
  children?: React.ReactNode;
  dir?: string;
  index: any;
  value: any;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 20,
    marginLeft: 10,
    marginRight: 10,
  },
  card: {
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 10,
  },
  tabContainer: {
    background: '#fc4a00',
  },
  tab: {
    color: 'white',
  },
  indicator: {
    backgroundColor: 'Black',
  },
  tabSelected: {
    backgroundColor: '#3a3a3a',
  },
}));

const TabFourPosts = () => {
  const classes = useStyles();
  const getPosts = gql`
  query getPosts ($categoryName:String!) {
    posts(
      first: 4
      where: {
        orderby: { field: DATE, order: DESC }
        categoryName: $categoryName
      }
    ) {
      edges {
        node {
          id
          date
          title
          slug
          featuredImage {
            node {
              mediaItemUrl
            }
          }
        }
      }
    }
  }
`;

  const [value, setValue] = React.useState(0);

  const { loading: loadingSport, data: sportData } = useQuery(getPosts, {
    variables: { categoryName: 'Deportes' },
  });
  const sportPosts = sportData?.posts?.edges?.map((edge) => edge.node) || [];

  const { loading: loadingHealth, data: healthData } = useQuery(getPosts, {
    variables: { categoryName: 'Salud' },
  });
  const healthPosts = healthData?.posts?.edges?.map((edge) => edge.node) || [];

  const { loading: loadingTechnology, data: technologyData } = useQuery(getPosts, {
    variables: { categoryName: 'Tecnología' },
  });
  const technologyPosts = technologyData?.posts?.edges?.map((edge) => edge.node) || [];

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  const showSkeleton = (rows) => {
    const skeletons = [];

    for (let i = 0; i < rows; i++) {
      skeletons.push(
        <div style={{ minWidth: '50%' }}>
          <Skeleton
            variant="rect"
            animation="wave"
            style={{
              minWidth: '47%', minHeight: 290,
              marginLeft: 10, marginRight: 10
            }} />
          <Skeleton variant="text"
            animation="wave"
            style={{
              minWidth: 300, minHeight: 50,
              marginLeft: 10, marginRight: 10, marginBottom: 10
            }} />
        </div>
      );
    }
    return skeletons;
  };

  return (
    <>
      <Paper square className={classes.root}>
        <Tabs
          value={value}
          onChange={handleChange}
          variant="fullWidth"
          indicatorColor="secondary"
          aria-label="icon label tabs example"
          className={classes.tabContainer}
          classes={{
            indicator: classes.indicator,
          }}
        >
          <Tab icon={<SportsBasketballIcon />} label="Deportes" className={classes.tab} classes={{ selected: classes.tabSelected }} />
          <Tab icon={<FitnessCenterIcon />} label="Salud" className={classes.tab} classes={{ selected: classes.tabSelected }} />
          <Tab icon={<ImportantDevicesIcon />} label="Tecnología" className={classes.tab} classes={{ selected: classes.tabSelected }} />
        </Tabs>

        <TabPanel value={value} index={0}>
          <Grid container lg={12}>
            {
              !loadingSport && sportPosts ?
                sportPosts.map((post) => (
                  <Grid container lg={6} className={classes.card}>
                    <FeaturedPost key={`sport-featured-post-${post.id}`} post={post} />
                  </Grid>
                )) :
                showSkeleton(4)
            }
          </Grid>
        </TabPanel>
        <TabPanel value={value} index={1}>
          {
            !loadingHealth && healthPosts ?
              <SlidePosts key={`health-tech-featured-post`} posts={healthPosts || null} />
              :
              showSkeleton(1)
          }
        </TabPanel>
        <TabPanel value={value} index={2}>
          <Grid container lg={12}>
            {!loadingTechnology && technologyPosts ?
              technologyPosts.map((post) => (
                <Grid container lg={6} className={classes.card}>
                  <FeaturedPost key={`tech-featured-post-${post.id}`} post={post} />
                </Grid>
              ))
              :
              showSkeleton(4)
            }
          </Grid>
        </TabPanel>
      </Paper>


    </>
  );
};
export default TabFourPosts;
