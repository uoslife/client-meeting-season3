export const copyLink = (link: string) => {
  navigator.clipboard.writeText(link).then(() => alert('copyed!'));
};
