console.log("✅ content.js loaded");

// Hardcoded settings
const options = {
  hidePmEditor: true,
  hideIsFollowing: true,
  hideTopPicks: true,
  hideSuggestions: true,
  hideShopPosts: true,
  hideSharedListing: true,
  hidePoshShow: true,
  hideLiveShow: true,
  hideLiveNow: true,
  hideStreamingNow: true,
  hideJustShared: true,
  hideJustListed: true,
  hideNewListing: true,
  hidePoshParty: true,
  hideJoinParty: true,
  hidePartyNow: true,
  hideWelcome: true,
  hideTips: true,
  hideOfferToLikers: true,
  hideOfferMade: true,
  hideResell: true,
  hideBulkShare: true,
  hideFollowLink: true
};

// Filters feed items
function filterFeedItems() {
  const posts = document.querySelectorAll('.news-feed__item');
  posts.forEach(post => {
    const text = post.innerText.toLowerCase();
    if (
      (options.hidePmEditor && post.innerHTML.includes('pm_editor')) ||
      (options.hideIsFollowing && text.includes('is following you')) ||
      (options.hideTopPicks && text.includes('your top picks are here')) ||
      (options.hideSuggestions && text.includes('you might like these')) ||
      (options.hideShopPosts && text.includes('shop')) ||
      (options.hideSharedListing && text.includes('shared your listing')) ||
      (options.hidePoshShow && text.includes('posh show')) ||
      (options.hideLiveShow && text.includes('live show')) ||
      (options.hideLiveNow && text.includes('live now')) ||
      (options.hideStreamingNow && text.includes('streaming now')) ||
      (options.hideJustShared && text.includes('just shared')) ||
      (options.hideJustListed && text.includes('just listed')) ||
      (options.hideNewListing && text.includes('new listing')) ||
      (options.hidePoshParty && text.includes('posh party')) ||
      (options.hideJoinParty && text.includes('join the party')) ||
      (options.hidePartyNow && text.includes('party going on now')) ||
      (options.hideWelcome && text.includes('welcome to poshmark')) ||
      (options.hideTips && text.includes('poshmark tips')) ||
      (options.hideOfferToLikers && text.includes('offer to likers')) ||
      (options.hideOfferMade && text.includes('an offer was just made on a listing you liked')) ||
      (options.hideResell && text.includes('resell and earn cash')) ||
      (options.hideBulkShare && text.includes('share listings in bulk')) ||
      (options.hideFollowLink && text.includes('follow the link'))
    ) {
      post.remove();
    }
  });
}

// Initial sweep
filterFeedItems();

// Watch for new content being added
const observer = new MutationObserver(mutations => {
  for (const mutation of mutations) {
    mutation.addedNodes.forEach(node => {
      if (node.nodeType === 1) { // Element
        if (node.classList.contains('news-feed__item')) {
          const text = node.innerText?.toLowerCase();
          if (
            (options.hidePmEditor && node.innerHTML.includes('pm_editor')) ||
            (options.hideIsFollowing && text.includes('is following you')) ||
            (options.hideTopPicks && text.includes('your top picks are here')) ||
            (options.hideSuggestions && text.includes('you might like these')) ||
            (options.hideShopPosts && text.includes('shop')) ||
            (options.hideSharedListing && text.includes('shared your listing')) ||
            (options.hidePoshShow && text.includes('posh show')) ||
            (options.hideLiveShow && text.includes('live show')) ||
            (options.hideLiveNow && text.includes('live now')) ||
            (options.hideStreamingNow && text.includes('streaming now')) ||
            (options.hideJustShared && text.includes('just shared')) ||
            (options.hideJustListed && text.includes('just listed')) ||
            (options.hideNewListing && text.includes('new listing')) ||
            (options.hidePoshParty && text.includes('posh party')) ||
            (options.hideJoinParty && text.includes('join the party')) ||
            (options.hidePartyNow && text.includes('party going on now')) ||
            (options.hideWelcome && text.includes('welcome to poshmark')) ||
            (options.hideTips && text.includes('poshmark tips')) ||
            (options.hideOfferToLikers && text.includes('offer to likers')) ||
            (options.hideOfferMade && text.includes('an offer was just made on a listing you liked')) ||
            (options.hideResell && text.includes('resell and earn cash')) ||
            (options.hideBulkShare && text.includes('share listings in bulk')) ||
            (options.hideFollowLink && text.includes('follow the link'))
          ) {
            node.remove();
          }
        }

        const newPosts = node.querySelectorAll?.('.news-feed__item') || [];
        newPosts.forEach(post => {
          const text = post.innerText?.toLowerCase();
          if (
            (options.hidePmEditor && post.innerHTML.includes('pm_editor')) ||
            (options.hideIsFollowing && text.includes('is following you')) ||
            (options.hideTopPicks && text.includes('your top picks are here')) ||
            (options.hideSuggestions && text.includes('you might like these')) ||
            (options.hideShopPosts && text.includes('shop')) ||
            (options.hideSharedListing && text.includes('shared your listing')) ||
            (options.hidePoshShow && text.includes('posh show')) ||
            (options.hideLiveShow && text.includes('live show')) ||
            (options.hideLiveNow && text.includes('live now')) ||
            (options.hideStreamingNow && text.includes('streaming now')) ||
            (options.hideJustShared && text.includes('just shared')) ||
            (options.hideJustListed && text.includes('just listed')) ||
            (options.hideNewListing && text.includes('new listing')) ||
            (options.hidePoshParty && text.includes('posh party')) ||
            (options.hideJoinParty && text.includes('join the party')) ||
            (options.hidePartyNow && text.includes('party going on now')) ||
            (options.hideWelcome && text.includes('welcome to poshmark')) ||
            (options.hideTips && text.includes('poshmark tips')) ||
            (options.hideOfferToLikers && text.includes('offer to likers')) ||
            (options.hideOfferMade && text.includes('an offer was just made on a listing you liked')) ||
            (options.hideResell && text.includes('resell and earn cash')) ||
            (options.hideBulkShare && text.includes('share listings in bulk')) ||
            (options.hideFollowLink && text.includes('follow the link'))
          ) {
            post.remove();
          }
        });
      }
    });
  }
});

observer.observe(document.body, {
  childList: true,
  subtree: true
});
