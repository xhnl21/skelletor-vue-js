export default {
    resques (type, promise, token, upload, event, url, data) {
        const types = type.toLowerCase();
        switch (types) {
        case "post":

            if (promise === true) {
                if (token === true) {
                    if (upload === true) {
                        return new Promise((resolve, reject) => {
                            this.isLoadingImgNotes = true;
                            const fileSendHeader = { headers: { "Content-Type": "multipart/form-data" } };
                            const formData = new FormData();
                            let cont = [];
                            for (const i in event.target.files) {
                                if (event.target.files.hasOwnProperty(i)) {
                                    cont++;
                                    formData.append("image" + cont, event.target.files[i]);
                                }
                            }
                            formData.append("nombreIMG", "image");
                            formData.append("cont", cont);
                            formData.append("jobs_id", this.jobsNoteID);
                            formData.append("org_id", window.localuserdata);
                            formData.append("user_id", window.master_client);

                            window.masterb
                                .post(url, formData, fileSendHeader)
                                .then((response) => {
                                    resolve(response);
                                })
                                .catch((error) => {
                                    reject(error);
                                });
                        });
                    } else {
                        return new Promise((resolve, reject) => {
                            window.masterb
                                .post(url, data)
                                .then((response) => {
                                    resolve(response);
                                })
                                .catch((error) => {
                                    reject(error);
                                });
                        });
                    }
                } else {
                    if (upload === true) {
                        return new Promise((resolve, reject) => {
                            window.masterb
                                .post(url, data)
                                .then((response) => {
                                    resolve(response);
                                })
                                .catch((error) => {
                                    reject(error);
                                });
                        });
                    } else {
                        return new Promise((resolve, reject) => {
                            window.masterb
                                .post(url, data)
                                .then((response) => {
                                    resolve(response);
                                })
                                .catch((error) => {
                                    reject(error);
                                });
                        });
                    }
                }
            } else {
                if (token === true) {
                    if (upload === true) {
                        window.masterb.post(url, data)
                            .then((response) => {
                                return response;
                            })
                            .catch((error) => {
                                return error;
                            });
                    } else {
                        window.masterb.post(url, data)
                            .then((response) => {
                                return response;
                            })
                            .catch((error) => {
                                return error;
                            });
                    }
                } else {
                    if (upload === true) {
                        window.master.post(url, data)
                            .then((response) => {
                                return response;
                            })
                            .catch((error) => {
                                return error;
                            });
                    } else {
                        window.master.post(url, data)
                            .then((response) => {
                                return response;
                            })
                            .catch((error) => {
                                return error;
                            });
                    }
                }
            }
            break;
        case "get":
            if (promise === true) {
                if (token === true) {
                    if (upload === true) {
                        return new Promise((resolve, reject) => {
                            window.masterb
                                .post(url, data)
                                .then((response) => {
                                    resolve(true);
                                    return response;
                                })
                                .catch((error) => {
                                    reject(false);
                                    return error;
                                });
                        });
                    } else {
                        return new Promise((resolve, reject) => {
                            window.masterb
                                .post(url, data)
                                .then((response) => {
                                    resolve(true);
                                    return response;
                                })
                                .catch((error) => {
                                    reject(false);
                                    return error;
                                });
                        });
                    }
                } else {
                    if (upload === true) {
                        return new Promise((resolve, reject) => {
                            window.masterb
                                .post(url, data)
                                .then((response) => {
                                    resolve(true);
                                    return response;
                                })
                                .catch((error) => {
                                    reject(false);
                                    return error;
                                });
                        });
                    } else {
                        return new Promise((resolve, reject) => {
                            window.masterb
                                .post(url, data)
                                .then((response) => {
                                    resolve(true);
                                    return response;
                                })
                                .catch((error) => {
                                    reject(false);
                                    return error;
                                });
                        });
                    }
                }
            } else {
                if (token === true) {
                    if (upload === true) {
                        window.masterb.post(url, data)
                            .then((response) => {
                                return response;
                            })
                            .catch((error) => {
                                return error;
                            });
                    } else {
                        window.masterb.post(url, data)
                            .then((response) => {
                                return response;
                            })
                            .catch((error) => {
                                return error;
                            });
                    }
                } else {
                    if (upload === true) {
                        window.master.post(url, data)
                            .then((response) => {
                                return response;
                            })
                            .catch((error) => {
                                return error;
                            });
                    } else {
                        window.master.post(url, data)
                            .then((response) => {
                                return response;
                            })
                            .catch((error) => {
                                return error;
                            });
                    }
                }
            }
            break;
        case "put":
            if (promise === true) {
                if (token === true) {
                    if (upload === true) {
                        return new Promise((resolve, reject) => {
                            window.masterb
                                .post(url, data)
                                .then((response) => {
                                    resolve(true);
                                    return response;
                                })
                                .catch((error) => {
                                    reject(false);
                                    return error;
                                });
                        });
                    } else {
                        return new Promise((resolve, reject) => {
                            window.masterb
                                .post(url, data)
                                .then((response) => {
                                    resolve(true);
                                    return response;
                                })
                                .catch((error) => {
                                    reject(false);
                                    return error;
                                });
                        });
                    }
                } else {
                    if (upload === true) {
                        return new Promise((resolve, reject) => {
                            window.masterb
                                .post(url, data)
                                .then((response) => {
                                    resolve(true);
                                    return response;
                                })
                                .catch((error) => {
                                    reject(false);
                                    return error;
                                });
                        });
                    } else {
                        return new Promise((resolve, reject) => {
                            window.masterb
                                .post(url, data)
                                .then((response) => {
                                    resolve(true);
                                    return response;
                                })
                                .catch((error) => {
                                    reject(false);
                                    return error;
                                });
                        });
                    }
                }
            } else {
                if (token === true) {
                    if (upload === true) {
                        window.masterb.post(url, data)
                            .then((response) => {
                                return response;
                            })
                            .catch((error) => {
                                return error;
                            });
                    } else {
                        window.masterb.post(url, data)
                            .then((response) => {
                                return response;
                            })
                            .catch((error) => {
                                return error;
                            });
                    }
                } else {
                    if (upload === true) {
                        window.master.post(url, data)
                            .then((response) => {
                                return response;
                            })
                            .catch((error) => {
                                return error;
                            });
                    } else {
                        window.master.post(url, data)
                            .then((response) => {
                                return response;
                            })
                            .catch((error) => {
                                return error;
                            });
                    }
                }
            }
            break;
        case "delete":
            if (promise === true) {
                if (token === true) {
                    if (upload === true) {
                        return new Promise((resolve, reject) => {
                            window.masterb
                                .post(url, data)
                                .then((response) => {
                                    resolve(true);
                                    return response;
                                })
                                .catch((error) => {
                                    reject(false);
                                    return error;
                                });
                        });
                    } else {
                        return new Promise((resolve, reject) => {
                            window.masterb
                                .post(url, data)
                                .then((response) => {
                                    resolve(true);
                                    return response;
                                })
                                .catch((error) => {
                                    reject(false);
                                    return error;
                                });
                        });
                    }
                } else {
                    if (upload === true) {
                        return new Promise((resolve, reject) => {
                            window.masterb
                                .post(url, data)
                                .then((response) => {
                                    resolve(true);
                                    return response;
                                })
                                .catch((error) => {
                                    reject(false);
                                    return error;
                                });
                        });
                    } else {
                        return new Promise((resolve, reject) => {
                            window.masterb
                                .post(url, data)
                                .then((response) => {
                                    resolve(true);
                                    return response;
                                })
                                .catch((error) => {
                                    reject(false);
                                    return error;
                                });
                        });
                    }
                }
            } else {
                if (token === true) {
                    if (upload === true) {
                        window.masterb.post(url, data)
                            .then((response) => {
                                return response;
                            })
                            .catch((error) => {
                                return error;
                            });
                    } else {
                        window.masterb.post(url, data)
                            .then((response) => {
                                return response;
                            })
                            .catch((error) => {
                                return error;
                            });
                    }
                } else {
                    if (upload === true) {
                        window.master.post(url, data)
                            .then((response) => {
                                return response;
                            })
                            .catch((error) => {
                                return error;
                            });
                    } else {
                        window.master.post(url, data)
                            .then((response) => {
                                return response;
                            })
                            .catch((error) => {
                                return error;
                            });
                    }
                }
            }
            break;
        }
    }
};
