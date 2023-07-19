class TeamsPage
{
    releaseNotes(){
        return cy.get('.releaseNote_module_closeIcon__1b1fe36c')
    }
    logout(){
        return cy.get('.avatar_module_avatar__dropIcon__f984241d')
    }
    logoutButton(){
        return cy.contains('Logout')
    }
    teams(){
        return cy.contains('Teams')
    }
    searchProject(){
        return cy.get('.lf-input')
    }
}
export default TeamsPage;
