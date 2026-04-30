Feature: View movie details

    Scenario: Display movie details page
        Given I am browsing the movies application
        When I select a movie from the list
        Then the movie details page is displayed
        And I see the movie title as a heading
        And I see the release date

    Scenario: Release date is formatted consistently
        Given I am on the movie details page for a movie with a release date
        Then the release date is formatted as "Month Day, Year"

    Scenario: Handle movie with no release date
        Given I am on the movie details page for a movie without a release date
        Then I see the message "Release date not available"

    Scenario: Back button returns to movie list
        Given I am on a movie details page
        When I click the back button
        Then I return to the movie list

    Scenario: Error message for movie not found
        Given I try to access a movie that does not exist
        Then I see an error message "Movie not found"
