# Requirements

## User Journey 1
As a movie enthusiast    
I want to view movies    
So that I can view movie information

## User Journey 2
As a movie enthusiast    
I want to view a movies details    
So that I can see release date

### Requirements - UJ2

**Given** a movie enthusiast is browsing the movies application  
**When** they click on or select a specific movie from the movie list  
**Then** the application displays the movie's details page/modal with the following information:
- Movie title (Heading)
- Release date ("15-01-2024")

#### Acceptance Criteria

- **AC1:** The release date is formatted consistently (e.g., "January 15, 2024")
- **AC2:** If a movie has no release date, a message such as "Release date not available" is displayed
- **AC3:** Text contrast meets WCAG AA standards
- **AC4:** A back button allows users to return to the movie list
- **AC5:** If movie is not found a clear error is displayed with "Movie not found" message

## User Journey 3
As an admin of the movies website    
I want to add movies to the list    
So that I can keep movies up-to-date

## User Journey 4
As an admin of the movies website    
I want to remove movies from list    
So that I can keep movies up-to-date
