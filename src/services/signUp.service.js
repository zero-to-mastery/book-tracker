const SignUpService = {
  request: async (body = {}) => {
      const response = await fetch("http://localhost:5000/api/auth/signup", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body,
      })

      return {
        error: !response.ok && response.status === 400,
        body: await response.json()
      }
  }
}

export default SignUpService;