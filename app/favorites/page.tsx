import EmptyState from '@/app/components/EmptyState'
import getCurrentUser from '../action/getCurrentUser'
import getFavoriteListings from '../action/getFavoriteListings'
import FavoritesClient from './FavoritesClient'


const ListingPage = async () => {
  const listings = await getFavoriteListings();
  const currentUser = await getCurrentUser();

  if (listings.length === 0) {
    return (
      <div>
        <EmptyState
          title='No favorites found'
          subtitle="Looks like you have no favorite listings."
        />
      </div>
    )
  }
  return (
    <FavoritesClient
      listings={listings}
      currentUser={currentUser}
    />
  )
}

export default ListingPage