import React from "react";

import { Layout } from "../../components/layout";

import Image from "next/image";

const FirstArticle: React.FC = () => {
  return (
    <Layout>
      <div>
        <p>
          As I travel a familiar trail, the frost-nipped forest offers new
          perspectives and mycological surprises. With six-year-old Eliana
          leading the family foray, Noemi descends from Mama’s baby carrier,
          eager to put her newfound walking ability to the test on some rugged
          Green Mountain terrain. Grandpa is here as well, joining us for a
          socially distanced outing.
        </p>
        <p>
          For the mycologically inclined, the forest floor holds hope of hidden
          treasure, and any woodland stroll can quickly turn into a windfall. As
          if following a primal instinct, I veer off-trail unannounced, skipping
          gleefully in the direction of a dark, dense, and foreboding bog.
          Crawling beneath the conifers, I yelp reflexively, redeemed by an epic
          flush. A brilliant orange vein of my quarry spirals through the thick
          moss and shrubby undergrowth. I follow the fruiting to find an
          explosion of fragrant yellowfoot chanterelles, stretching out in all
          directions like a giant, tentacled cephalopod.
        </p>
        <Image src="/imageBlogFA.png" alt="article1" width="1005px" height="327px"></Image>
        <p>
          I ebulliently beckon to the troops – ages 1 to 61 – and soon the full
          crew has found me on hands and soggy knees, joining the reverie and
          getting to work picking. I put my mushroom mentee, Eliana, to work
          plucking winter chanterelles from tight, tricky to access hideaways,
          where low clearance complicates access for her lanky Papa. Soon we
          have each filled a paper bag, leaving the vast majority of the
          sprawling patch untouched and unchartered.
        </p>
        <p>
          When we arrive home and Jenna cooks up chanterelle omelets, we
          discover that a little new mycophile has announced her presence at the
          kitchen table, vocally demanding mushrooms from the perch of her
          highchair. Eliana, it seems, so accustomed to getting all the choice
          morsels, has finally been met with some stiff competition in the
          house’s wild mushroom culinary pecking order. As Noemi delights in
          each bite of forest flavor, outside daylight dims as summer fades to
          fall.
        </p>
      </div>
    </Layout>
  );
};
export default FirstArticle;
