//cypress - spec or test file
/// <reference types="cypress" />
import TeamsPage from "../pages/teamsPage";
import teamsData from "../../fixtures/teamsData.json"


describe("Teams", () => {
  const teamsPage = new TeamsPage()
  beforeEach(() => {
    cy.request('GET', `${Cypress.env('authUrl')}${Cypress.env('authenticate')}?clientId=${Cypress.env('clientId')}&token=${Cypress.env('token')}`).then((req) => {
      cy.setCookie('accessToken', req.body.data.accessToken);
      cy.setCookie('refreshToken', req.body.data.refreshToken);
    })
  }),
    beforeEach("Login to Vyaguta", () => {
      cy.visit(Cypress.env('appUrl'))
      cy.releaseNotes()
    })
  afterEach("Logout to Vyaguta", () => {
    cy.logout()
  })

  it('Verify that the User can navigate to "Teams".', () => {
    teamsPage.teams().click()
    teamsPage.releaseNotes().click()
    teamsPage.searchProject().type(teamsData.projectName)
  })
})